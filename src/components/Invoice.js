import Status from './Status'



const invoice = ({ invoice, editInvoice }) => {
    return (
        <div className="invoice" onClick={() => editInvoice(invoice) }>
            <div className="left">
                <div className="id">
                    <p className="hash">#</p>
                    <p>{invoice.id}</p>          
                </div>
                <p>{invoice.paymentDue}</p>
                <p>{invoice.clientName}</p>
            </div>
              
            <div className="right">
                <h2>$ {invoice.total}</h2>
                <Status status={invoice.status}></Status>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/>
                </svg>
            </div>
        </div>
    )
}

export default invoice
