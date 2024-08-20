import { useContext } from "react";
import {ShopContext} from '../App';

const Product = ({
  burgerData}) => {

const {cartData, addToCart}= useContext(ShopContext)

  return (
    <div className=" rounded-lg border my-4 mx-auto w-52 ">
      <img
        src={burgerData.image}
        alt="burger"
        className=" h-40 w-52 rounded-t"
      />

      <div className=" w-full text-center">
        
        
        <h3>{burgerData.title}</h3>
          <div className="flex items-center justify-around flex-col  w-1/2 mx-auto">
            <p> total price</p>
            <h3 className=" text-lg"> ${burgerData.price.toFixed(2)}</h3>
          </div>

          
          <div>

            <button
              onClick={( id) => addToCart( burgerData.id)}
              className="rounded-lg py-1 px-2  bg-red-600"
            >
              Add to cart  { cartData[burgerData.id] > 0 &&
              <> ({cartData[burgerData.id]}) </>
              
             }
            </button>
          </div>
        
      </div>
    </div>

  );
};

export default Product;

{/* <div className="flex item-center justify-center bg-red-600"> <button className="p-1"> -</button> <input type="number" className="bg-red-600"/>  <button className="p-1"> +</button> </div> */}