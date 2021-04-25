
const ItemReceipt = (item) => {
    item = item.item;
    return (
        <tr className="item">
            <td className="item-1"><p className="black">{item.name}</p></td>
            <td><p>{item.quantity}</p></td>
            <td><p>$ {item.price.toFixed(2)}</p></td>
            <td><p className="black">$ {item.total.toFixed(2)}</p></td>
        </tr>
    )
}

export default ItemReceipt
