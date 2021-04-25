import { useState } from 'react'
import Invoices from './components/Invoices'
import EditInvoice from './components/EditInvoice'
import SideBar from './components/SideBar'
import data from './data.json'
import DataForm from './components/DataForm'

let editableInvoice;

function App() {
  const [showInvoice, setShowInvoice] = useState(true)
  const [showEditInvoice, setShowEditInvoice] = useState(false)
  const [showDataForm, setShowDataForm] = useState(false)
  const[invoices, setInvoices] = useState(data)

  const editInvoice = (e) => {
    setShowInvoice(!showInvoice);
    setShowEditInvoice(!showEditInvoice);
    editableInvoice = e;
  }

  // const addInvoice = (invoice) => {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newInvoice = {id, ...invoice}
  //   setInvoices([...invoices, newInvoice])
  // }
  const newInvoice = (e) => {
    console.log(editableInvoice);
    editableInvoice = e
    setShowDataForm(!showDataForm);
  }
  
  const deleteInvoice = (id) => {
   editInvoice()
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  }

  const markPaid = (invoice) => {
    invoice.status = "paid";
    console.log(invoice.status)
    setShowEditInvoice({})
  }
  
  return (
    <div className="App">
      <SideBar></SideBar>
      {showInvoice && <Invoices invoices={invoices} editInvoice={editInvoice} newInvoice={newInvoice}/>}
      {showEditInvoice && <EditInvoice invoice={editableInvoice} 
      deleteInvoice={deleteInvoice} markPaid={markPaid} editInvoice={editInvoice} editData={newInvoice}/>}
      {showDataForm && <DataForm invoice={editableInvoice}/>}
      
    </div>
  );
}

export default App;
