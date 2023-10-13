import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Neel", "John", "Jane"]
        const int = Math.floor(Math.random() * 3) // random number between 0 and 2
        return names[int]
        }
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content