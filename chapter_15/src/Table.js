import React from 'react'
import Row from './Row'

const Table = ({ items }) => {
  return (
    <div className='table-container'>
        <table>
            <tbody>
                {/* maps items to rows */}
                {items.map(item => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table