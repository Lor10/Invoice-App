import { useState } from 'react'

const ConfirmDelete = ({ invoice, showConfirmDeleteButton, deleteInvoice }) => {

    const Delete = (id, showConfirmDeleteButton, deleteInvoice) => {
        showConfirmDeleteButton();
        deleteInvoice(id);
    }

    return (
        <div className="full">
            <div className="confirm-deletion-container">
                <div className="text">
                    <h1>Confirm Deletion</h1>
                    <p>Are you sure you want to delete invoice #{invoice.id} This action cannot be undone.</p>
                </div>
                <div className="buttons">
                    <button className="cancel" onClick={() => showConfirmDeleteButton()}><p>Cancel</p></button>
                    <button className="delete" onClick={() => Delete(invoice.id, showConfirmDeleteButton, deleteInvoice)}><p>Delete</p></button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete
