import EmptyImg from '../assets/illustration-empty.svg'

const NoInvoices = () => {
    return (
        <div className="no-invoices">
            <img src={EmptyImg}></img>
            <h2>There is nothing here</h2>
            <p>Create an invoice by clicking the</p>
            <p>New Invoice button and get started</p>
        </div>
    )
}

export default NoInvoices
