import { currencyFormatter } from "../util/currencyFormatter"
import Button from "./UI/Button"
import { use } from "react"
import CartContext from "../store/CartContext"

export default function MealItem({ meal }) {
    const cartCtx = use(CartContext)
    function addItemToCart() {
        cartCtx.addItem(meal)
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={() => { addItemToCart(meal) }} textOnly={false}>Add to cart</Button>
                </p>

            </article>

        </li>
    )

}