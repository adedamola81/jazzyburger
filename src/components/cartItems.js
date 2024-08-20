import { useContext } from "react";
import { ShopContext } from "../App";

const CartItems = ({ data }) => {
  const { cartData, addToCart, removeFromCart,updateCartInput } = useContext(ShopContext);
  const { id, title, price, image } = data;
  return (
    <div className=" flex item-center justify-around mt-4  rounded-lg bg-gray-200 h-40 w-3/5 mx-auto">
      <img className='h-32 w-32 rounded-lg self-center' src={image} />
      <div className="flex item-center justify-center flex-col">
        <div className="  mb-2 ">
          {title}  ${price * cartData[id]}
        </div>
        <div className="flex item-center justify-center  mx-auto rounded">
          <button onClick={()=> removeFromCart(id)} className="p-1 w-4 bg-red-300"> -</button>


          <input onChange={event=> updateCartInput(id,event)} type="number" className="w-12 text-center  "value={cartData[id]}  />


          <button onClick={()=> addToCart(id)}
          className="p-1 w-4 bg-green-300"> +</button>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
