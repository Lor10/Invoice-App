import { useState } from 'react'
import DataInput from './DataInput'

const InvoiceItem = ({items, deleteItem }) => {
    const [name, setName] = useState(items.name)
    const [price, setPrice] = useState(items.price)
    const [quantity, setQuantity] = useState(items.quantity)

    items.name=name
    items.price=price
    items.quantity=quantity
    items.total=(quantity*price)
    return (
        <div className='invoice-item'>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div className="last">
                <p>{(quantity*price).toFixed(2)}</p>
                <div onClick={() => deleteItem()}>
                    <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}

export default InvoiceItem
