import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa' // import trash icon from react-icons library

const Content = () => {
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
        // finds item with id as parameter id
        // if found, update item with new item object with checked property set to opposite of current checked property
        // if not found, return item as is
        setItems(listItems) // change the state of items to new list of items
        localStorage.setItem('items', JSON.stringify(listItems)) // save new list of items to local storage

    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        // filter out item with id different from parameter id (creates a new array where elements are those that match the condition)
        setItems(listItems) // change the state of items to new list of items
        localStorage.setItem('items', JSON.stringify(listItems)) // save new list of items to local storage
    }
    
    // display items in a list in JSX: use map() method
    // React reacts to changes in state, so every list item needs a key prop
    // In React, the key prop is a special attribute that is used to uniquely identify elements in a list. When rendering a list of items, React needs a way to keep track of which items have changed, been added, or been removed. By providing a unique key prop for each item, React can efficiently update the list without having to re-render the entire thing.
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map(item => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label 
                                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}>{item.item}
                            </label>
                            {/* want to check also when double clicking on the label */}
                            <FaTrashAlt 
                                onClick={() => handleDelete(item.id)}
                                role='button' 
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                    <p style={{ marginTop: '2rem' }}>No items in list.</p>
            )}
        </main>
    )
}

export default Content