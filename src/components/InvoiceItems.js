import { useState } from 'react'
import InvoiceItem from './InvoiceItem'

const InvoiceItems = ({ invoice }) => {
    const [items, setItems] = useState('')
    const [error, setError] = useState(false)

    const addItem = () => {
        const blank = {name:'', quantity:0, price:0, total:0}
        const lastItem = items[items.length - 1];
        if(items == '' || lastItem.name != ''){
            setItems([...items, blank])
            setError(false)
        }else{
            setError(true)
        }
      }
    
    const deleteItem = (index) =>{
        console.log(index)
        const itemsNew = items.splice(index, 1)
        console.log(itemsNew)
        setItems(itemsNew);

    }

    if (items.length == 0 && invoice !== null) {
         setItems(invoice.items)
    }

    return (
        <div>
            {items.length != 0 ? items.map((item, index) =>(<InvoiceItem key={index} items={item} deleteItem={() => deleteItem(items.indexOf(item))} />) ) : <p className="nothing">Nothing Here!</p>}
            {error && <p className="error">Please add Name or Quantity</p>}
            <div className="add-item-button" onClick={() => addItem()}><p>+ Add New Item</p></div>
        </div>
    )
}

export default InvoiceItems
