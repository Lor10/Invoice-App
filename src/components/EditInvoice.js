import ItemReceipt from './ItemReceipt';
import Status from './Status'
import ConfirmDelete from './ConfirmDelete'
import { useState } from 'react'



const formatDate = (d) => {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date(d);
    date =(`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`)
    return date.toString();
}


const EditInvoice = ({ invoice, deleteInvoice, markPaid, editInvoice, editData}) => {

    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    const showConfirmDeleteButton = () => {
        setShowConfirmDelete(!showConfirmDelete);
      }

      
    return (
        
        <div className="edit-invoice">
            {showConfirmDelete && <ConfirmDelete invoice={invoice} showConfirmDeleteButton={showConfirmDeleteButton} deleteInvoice={deleteInvoice}/>}
            <div className="back" onClick={() => editInvoice()}>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" strokeWidth="2" fill="none" fillRule="evenodd"/>
                </svg>
                <p>Go Back</p>
            </div>
            
            <div className="top">
                <div className="left">
                    <p>Status</p>
                    <Status status={invoice.status}></Status>
                </div>
                <div className="right">
                    <button className="edit" onClick={() => editData(invoice)}><p>Edit</p></button>
                    <button className="delete" onClick={() => showConfirmDeleteButton()}><p>Delete</p></button>
                    <button className="mark-paid" onClick={() => markPaid(invoice)}><p>Mark as Paid</p></button>
                </div>
            </div>

            <div className="info">
                <div className="first-section">
                    <div className="left">
                        <h2>#{invoice.id}</h2>
                        <p>{invoice.description}</p>
                    </div>
                    <ul className="right">
                        <li><p>{invoice.senderAddress.street}</p></li>
                        <li><p>{invoice.senderAddress.city}</p></li>
                        <li><p>{invoice.senderAddress.postCode}</p></li>
                        <li><p>{invoice.senderAddress.country}</p></li>
                    </ul>
                </div>

                <div className="second-section">
                    <div className="left">
                        <p>Invoice Date</p>
                        <h3>{formatDate(invoice.createdAt)}</h3>
                        <p>Payment Due</p>
                        <h3>{formatDate(invoice.paymentDue)}</h3>
                    </div>
                    <div className="center">
                        <p>Bill To</p>
                        <h2>{invoice.clientName}</h2>
                        <p>{invoice.clientAddress.street}</p>
                        <p>{invoice.clientAddress.city}</p>
                        <p>{invoice.clientAddress.postCode}</p>
                        <p>{invoice.clientAddress.country}</p>
                    </div>
                    <div className="right">
                        <p>Sent to</p>
                        <h3>{invoice.clientEmail }</h3>
                    </div>
                </div>

                <div className="receipt">
                    <table>
                        <tbody>
                            <tr className="item">
                                <td className="item-1"><p>Item Name</p></td>
                                <td><p>QTY.</p></td>
                                <td><p>Price</p></td>
                                <td><p>Total</p></td>
                            </tr>
                            {invoice.items.map((item) =>(
                            <ItemReceipt key={item.name} item={item}></ItemReceipt>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="total">
                    <p className="text2">Amount Due</p>
                    <h1>$ {invoice.total.toFixed(2)}</h1>
                </div>
            </div>
        </div>
    )
}

export default EditInvoice
