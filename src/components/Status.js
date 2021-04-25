

const Status = (status) => {
    
    return (
        <div className={`status ${status.status}`}>
            <div className={`circle ${status.status}`}></div>
            <h3>{status.status}</h3>
        </div>
    )
}

export default Status
