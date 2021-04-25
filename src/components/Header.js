import Filter from './Filter'
import NewInvoiceButton from './NewInvoiceButton'

const Header = ({ totalInvoices, newInvoice }) => {
    return (
        <header>
            <div className="left">
                <h1>Invoices</h1>
                <p>There are {totalInvoices} total invoices</p>
            </div>
            <div className="right">
                <Filter></Filter>
                <NewInvoiceButton newInvoice={newInvoice}></NewInvoiceButton>
            </div>
        </header>
            
    )
}

export default Header
