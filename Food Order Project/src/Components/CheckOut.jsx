import CartContext from "../store/CartContext"
import UserContext from "../store/UserProgress";
import { currencyFormatter } from "../util/currencyFormatter";
import { use } from "react";
import Modal from "./UI/Modal";
import Input from "./Input";
import Button from "./UI/Button";
import { useActionState } from "react";
import Error from './Error'
import useHttp from "../useHttp";


const config = {
    method: 'POST',
    headers:{

        'Content-Type': 'application/json',
    }
    
}
export default function CheckOut() {
    const cartCtx = use(CartContext);
    const totalPrice = cartCtx.items.reduce((total, item) => { return total + (item.quantity * item.price) }, 0)
    const userCtx = use(UserContext)
    const { data, isLoading:isSending, error, sendReq,clearData } = useHttp('http://localhost:3000/orders', config)

    async function handleCheckOutAction(prev, formData) {
        const name = formData.get('name')
        const email = formData.get('email')
        const city = formData.get('City')
        const postalCode = formData.get('Code')
        const street = formData.get('address')

        sendReq(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: { name, email, city, street, postalCode }
            }
        }))

 
    }
    function handleClose() {
        userCtx.hideCheckOut()
    }
    function handleFinish(){
        userCtx.handleFinish()
        cartCtx.emptyCart()
        clearData()

    }
   
    const [formState, formAction, pending] = useActionState(handleCheckOutAction, null)
     if(data && !error){
        return <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
            <h2>Your order was registered successfully</h2>
            <h4>Preparing your order</h4>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Ok!</Button>
            </p>
        </Modal>
    }
    return (
        <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
            <form action={formAction}>
                <h2>CheckOut</h2>
                <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
                <Input label="name" id="name" type="text" />
                <Input label="email" id="email" type="email" />
                <Input label="address" id="address" type="text" />
                <div className="control-row">
                    <Input label="Postal Code" id="Code" type="text" />
                    <Input label="City" id="City" type="text" />
                </div>
                {error && <Error title="Failed To Submit Data" message={error}/>}
                <p className="modal-action">
                {isSending ?<span>Sending Order Data...</span>:
                <>
                    <Button type="button" textOnly onClick={handleClose} disabled={pending}>Close</Button>
                    <Button>Submit</Button>
                </>
                }
                </p>
            </form>
        </Modal>
    )

}