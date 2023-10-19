import Header from './Header'
import SearchItem from './SearchItem'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import AddItem from './AddItem'

function App() {
  const API_URL = 'http://localhost:3500/items';
  
  const [items, setItems] = useState([])  
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   console.log('Fetching items...')
  //   localStorage.setItem('shoppinglist', JSON.stringify(items));
  // }, [items])

  // write an async function that fetches the data from the API
  useEffect(() => {
    // catch errors from fetch
    const fetchItems = async () => {
      try {
        console.log('Fetching items...')
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected response')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
        } catch (err) {
          setFetchError(err.message)
        } finally {
          setIsLoading(false)
        }
      }
    // give the user interface time to load before fetching data
    setTimeout(() => { 
    (async () => { await fetchItems() })()
    }, 2000)
  }, [])
  // equivalent:
  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => setItems(data))

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
    e.preventDefault(); 
    if (!newItem) return; 
    addItem(newItem);
    setNewItem(''); 
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => ((item.item.toLowerCase()).includes(search.toLowerCase())))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
