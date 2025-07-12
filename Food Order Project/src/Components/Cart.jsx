import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/currencyFormatter";
import { use } from "react"
import Modal from './UI/Modal'
import Button from "./UI/Button";
import UserContext from "../store/UserProgress";
import CartItem from './CartItem';

export default function Cart() {
    const cartCtx = use(CartContext);
    const userCtx = use(UserContext);
    const cartItems = cartCtx.items
    const totalPrice = cartItems.reduce((total, item) => { return total + (item.quantity * item.price) }, 0)
    function handleCloseCart() {
        userCtx.hideCart()
    }
    function handleDecreaseItem(id){
        cartCtx.removeItem(id)

    }
    function handleIncreaseItem(item){
        cartCtx.addItem(item)


    }
    function showCheckOut(){
        userCtx.showCheckOut();        

    }
    return (
        <Modal className="cart" open={userCtx.progress === 'cart'} onClose={userCtx.progress === 'cart'?handleCloseCart:null}>
            <h2>Your Cart</h2>

            <ul>{cartItems.map((item) => <CartItem item={item} key={item.id} 
            onInc={()=>handleIncreaseItem(item)} onDec={()=>handleDecreaseItem(item.id)} />)}</ul>

            <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartItems.length ?<Button onClick={showCheckOut}>Check-Out</Button>:null }
            </p>
        </Modal>
    )
}