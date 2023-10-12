import { useState } from 'react'
// useState is a hook that allows us to use state in a functional component

const Content = () => {
    const [name, setName] = useState("Neel") // "Neel" is the initial value of the state variable "name"
    // name: getter, setName: setter
    const [count, setCount] = useState(0) // 0 is the initial value of the state variable "count"

    const handleNameChange = () => {
        const names = ["Neel", "John", "Jane"]
        const int = Math.floor(Math.random() * 3) // random number between 0 and 2
        setName(names[int])
        }

        const handleClick = () => {
            setCount(count + 1)
            setCount(count + 1)
            // note: count is not updated immediately after setCount is called
            //       so, even if we call it twice, count will be incremented by 1 only
            //       this is because setCount is asynchronous
            console.log(count)
        }

        const handleClick2 = () => {
            console.log(count)
        }

    return (
        <main>
            <p on onDoubleClick={handleClick}>
                {/* Here we can click the block element itself */}
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Click me!</button>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleClick2}>Click me!</button>
        </main>
    )
}

export default Content