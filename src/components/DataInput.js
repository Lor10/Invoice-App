import { useState } from 'react'

const DataInput = ({ data, type }) => {

    const [info, setInfo] = useState(data)

    return (
        <input type={type} value={info} onChange={(e) => setInfo(e.target.value)}/>
    )
}

export default DataInput
