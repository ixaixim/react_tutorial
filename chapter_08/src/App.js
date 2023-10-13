import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { 
        id: 1,
        item: 'Item 1',
        checked: true,
    },
    { 
        id: 2,
        item: 'Item 2',
        checked: false,
    },
    { 
        id: 3,
        item: 'Item 3',
        checked: false,
    }, 
  ]) 


  const handleCheck = (id) => {
    const listItems = items.map(item => (item.id === id) ? {...item, checked: !item.checked} : item);
    setItems(listItems) // change the state of items to new list of items
    localStorage.setItem('items', JSON.stringify(listItems)) // save new list of items to local storage

  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems) // change the state of items to new list of items
    localStorage.setItem('items', JSON.stringify(listItems)) // save new list of items to local storage
  }

  return (
    <div className="App">
      <Header title="Groceries List"/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
