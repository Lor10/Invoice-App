import Invoice from './Invoice'
import Header from './Header'
import NoInvoices from './NoInvoices'

const Invoices = ({ invoices, editInvoice, newInvoice}) => {

    console.log(invoices.length)
    return (
        <div className='main'>
            
            <Header totalInvoices={invoices.length} newInvoice={newInvoice}></Header>
            {invoices.length != 0 ? invoices.map((invoice) =>(<Invoice key={invoice.id}invoice={invoice} editInvoice={editInvoice}></Invoice>)) : <NoInvoices></NoInvoices>}
        </div>
    )
}

export default Invoices
