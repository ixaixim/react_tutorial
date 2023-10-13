import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Neel", "John", "Jane"]
        const int = Math.floor(Math.random() * 3) // random number between 0 and 2
        return names[int]
        }

        const handleClick = () => {
            console.log("Button was clicked!")
        }

        const handleClick2 = (name) => {
            console.log(`${name} was clicked!`)
        }

        const handleClick3 = (e) => {
            console.log(e.target)
            console.log(e.target.innerText)
            // e.target is the button that was clicked
            // e.target.innerText is the text inside the button
        }
    return (
        <main>
            <p on onDoubleClick={handleClick}>
                {/* Here we can click the block element itself */}
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => handleClick2('Neel')}>Click me!</button>
            <button onClick={(e) => handleClick3(e)}>Click me!</button>
            {/* Difference between these function calls: */}
            {/* The first button calls the handleClick function when clicked. This is a regular function call.

            The second button calls an arrow function that takes an argument and then calls the handleClick2 function with that argument. This is a function call using an arrow function as a wrapper.

            The third button calls an arrow function that takes an event object and then calls the handleClick3 function with that event object. This is a function call using an arrow function as a wrapper that passes an event object as an argument.

 */}
        </main>
    )
}

export default Content