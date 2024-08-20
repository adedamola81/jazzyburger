import { useContext } from "react";
import { ShopContext } from "../App";
import Product from "../components/product";
const Shop = () => {

const {burgerData}= useContext(ShopContext)

const burgerElements= burgerData.map((burger)=> (  <Product key={burger.id} burgerData={burger} />))

  return (
    <div className=" sm:grid grid-cols-2 md:grid-cols-3">
     {burgerElements}
    </div>
  );
};
export default Shop;
