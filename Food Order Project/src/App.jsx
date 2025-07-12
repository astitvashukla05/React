import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserContextProvider } from "./store/UserProgress";

function App() {
  
  return (
    <CartContextProvider>
      <UserContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut/>
      </UserContextProvider>
    </CartContextProvider>


  );
}

export default App;
