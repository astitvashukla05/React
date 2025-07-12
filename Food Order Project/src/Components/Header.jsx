import { use } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserContext from '../store/UserProgress'
export default function Header() {
   const cartCtx=use(CartContext)
   const progressCtx=use(UserContext)

   const totalItems=cartCtx.items.reduce((total,item)=>{
    return total+item.quantity
   },0)
   function handleShowCart(){
    progressCtx.showCart()
   }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart} textOnly={true}>{`Cart(${totalItems})`}</Button>
            </nav>
        </header>

    )
}