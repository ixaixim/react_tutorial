import Header from './Header'
import SearchItem from './SearchItem'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import AddItem from './AddItem'

function App() {

  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])  


  // useEffect is a hook provided by React that allows you to perform side effects in function components. Side effects are any operations that affect something outside of the component, such as fetching data from an API, updating the document title, or setting up event listeners
  // it is asynchronous
  // console.log('Before useEffect')
  // useEffect(() => {
  //   console.log('Updating items state')
  // }, [items]) // run when the dependency in the square bracket changes 
  // console.log('After useEffect')

  // allows to remove the function setAndSaveItems, since now we are using the useEffect hook
  // to save the items in the local storage automatically every time the items state changes
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items))
  }, [items])


  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')



  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, item, checked: false };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }


  const handleCheck = (id) => {
    const listItems = items.map(item => (item.id === id) ? {...item, checked: !item.checked} : item);
    setItems(listItems);  
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // won't refresh the page when something has been submitted
    if (!newItem) return; // won't add empty item
    addItem(newItem);
    setNewItem(''); // clear input field
  }

  return (
    <div className="App">
      <Header title="Groceries List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item.toLowerCase()).includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
