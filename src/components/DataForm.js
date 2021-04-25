import { useState } from 'react'
import DataInput from './DataInput'
import InvoiceItems from './InvoiceItems'
const DataForm = ({ invoice }) => {
    
    let edit=false;

    invoice == null ? edit = false : edit = true
    const [senderStreet, setSenderStreet] = useState(edit ? invoice.senderAddress.street : '')
    const [senderCity, setSenderCity] = useState(edit ? invoice.senderAddress.city : '')
    const [senderPostCode, setSenderPostCode] = useState(edit ? invoice.senderAddress.postCode : '')
    const [senderCountry, setSenderCountry] = useState(edit ? invoice.senderAddress.country : '')

    const [clientName, setClientName] = useState(edit ? invoice.clientName : '')
    const [clientEmail, setClientEmail] = useState(edit ? invoice.clientEmail : '')
    const [clientStreetAddress, setStreetAddress] = useState(edit ? invoice.clientAddress.street : '')
    const [clientCity, setClientCity] = useState(edit ? invoice.clientAddress.city : '')
    const [clientPostCode, setClientPostCode] = useState(edit ? invoice.clientAddress.postCode : '')
    const [clientCountry, setClientCountry] = useState(edit ? invoice.clientAddress.country : '')

    const [invoiceDate, setInvoiceDate] = useState(edit ? invoice.createdAt : '')
    const [paymentTerms, setPaymentTerms] = useState(edit ? invoice.paymentTerms : '')
    const [projectDescription, setProjectDescription] = useState(edit ? invoice.description : '')

    return (
        <div className='data-full'>
            <div className="data-container">
                <form className="data-edit">

                    {edit ? <h1>Edit #{invoice.id}</h1> : <h1>New Invoice</h1>}

                    <div className="from">
                        <h3>Bill From</h3>

                        <label><p>Street Address</p></label>
                        <DataInput data={senderStreet} type={'text'}></DataInput>
                        
                        <div className="three">
                            <div className="item">
                            <label><p>City</p></label>
                            <DataInput data={senderCity} type={'text'}></DataInput>
                            </div>
                            <div className="item">
                            <label><p>PostCode</p></label>
                            <DataInput data={senderPostCode} type={'text'}></DataInput>
                            </div>
                            <div className="item">
                            <label><p>Country</p></label>
                            <DataInput data={senderCountry} type={'text'}></DataInput>
                            </div>
                        </div>
                    </div>

                    <div className="to"></div>
                        <h3>Bill To</h3>

                        <label><p>Client's Name</p></label>
                        <DataInput data={clientName} type={'text'}></DataInput>
                        <label><p>Client's Email</p></label>
                        <DataInput data={clientEmail} type={'text'}></DataInput>
                        <label><p>Street Address</p></label>
                        <DataInput data={clientStreetAddress} type={'text'}></DataInput>
                        
                        <div className="three">
                            <div className="item">
                            <label><p>City</p></label>
                            <DataInput data={clientCity} type={'text'}></DataInput>
                            </div>
                            <div className="item">
                            <label><p>PostCode</p></label>
                            <DataInput data={clientPostCode} type={'text'}></DataInput>
                            </div>
                            <div className="item">
                            <label><p>Country</p></label>
                            <DataInput data={clientCountry} type={'text'}></DataInput>
                            </div>
                        </div>

                    <div className="two">
                        <div className="item">
                            <label><p>Invoice Date</p></label>
                            <DataInput data={invoiceDate} type={'date'}></DataInput>
                        </div>
                    <div className="item">
                            <label><p>Payment Terms</p></label>
                            <DataInput data={paymentTerms} type={'text'}></DataInput>
                    </div>
                    </div>
                    <label><p>Project Description</p></label>
                    <DataInput data={projectDescription} type={'text'}></DataInput>
                
                    <div className="item-list">
                        <h2>Item List</h2>
                        <InvoiceItems invoice={invoice}></InvoiceItems>
                    </div>

                    <div className="buttons">
                        <button className='cancel'><p>cancel</p></button>
                        <button className='save' onClick><p>Save Changes</p></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DataForm
