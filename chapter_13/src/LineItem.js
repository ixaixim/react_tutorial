import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
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
        <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role='button' 
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
            // aria-label attribute is used to provide a label for screen readers and other assistive technologies to describe the purpose or function of an element. 
        />
    </li>  
    )
}

export default LineItem