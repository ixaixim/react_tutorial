import Header from './Header'
import SearchItem from './SearchItem'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
import AddItem from './AddItem'

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])  
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, item, checked: false };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }


  const handleCheck = (id) => {
    const listItems = items.map(item => (item.id === id) ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);  
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
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
