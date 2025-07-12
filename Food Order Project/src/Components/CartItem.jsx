import { currencyFormatter } from "../util/currencyFormatter"
export default function CartItem({ item,onInc,onDec}) {
    return (
       <li className="cart-item" >
        <p>{item.name}- {item.quantity} x {currencyFormatter.format(item.price)}</p>
        <p className="cart-item-actions">
            <button onClick={onDec}>-</button>
            <span>{item.quantity}</span>
            <button onClick={onInc}>+</button>
        </p>
       </li>
    )
}
