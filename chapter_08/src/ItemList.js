import React from 'react'
import LineItem from './LineItem'

// We move the list content of Content.js to here
// Line Item has to take also a key prop because it is in a list
// React requires a unique key prop for each item in a list to help with efficient rendering of the list. When a list item is updated or removed, React uses the key prop to identify which item has changed, instead of re-rendering the entire list. This can significantly improve the performance of the application.

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
    {items.map(item => (
        <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
    ))}
    </ul>
  )
}

export default ItemList