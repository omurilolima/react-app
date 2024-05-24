import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartitems] = useState(["Product1", "Product2"]);

  // The logic operation (eg. cartItemsCount and onClear) should be executed in the App that loads the component
  // Not in the component itself
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartitems([])} />
    </div>
  );
}

export default App;
