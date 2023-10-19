import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react' // to focus back on the input field when the button is clicked

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef(null);
    return (
        // equivalent to (the event is automatically passed to the function)
        // <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem