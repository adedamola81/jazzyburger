import { useContext } from "react";
import { ShopContext } from "../App";
import CartItems from "../components/cartItems";
// import burgerData from "../data/burgerData";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartData, showProducts, addToCart, removeFromCart,burgerData, getTotalAmount } =
    useContext(ShopContext);
    const total= getTotalAmount()
    const navigate= useNavigate()
  return (
    <div className=" w-full h-screen text-center">
      <h1 className=" text-3xl"> Your cart items</h1>
      <div>

        {burgerData.map((burger) => {
          if (cartData[burger.id] !== 0) {
            return <CartItems key={burger.id} data={burger} />;
          }
          return null;
        })}
      </div>
{ total >0 ? (<div className=" m-2"> <p> subtotal:${total}</p>

<div className="flex items-center justify-center"><button className=" px-2 py-2 bg-green-600 m-2 rounded-lg" onClick={()=> navigate('/shop')}> continue shopping </button>

<button className=" px-2 py-2 bg-green-600 m-2 rounded-lg">checkout</button> </div>

 </div>) : <h1> Your cart is empty</h1>}




    </div>
  );
};

export default Cart;

