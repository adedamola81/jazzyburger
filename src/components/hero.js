// import Button from "./components/button";
// import { useContext } from "react";
// import Product from "./product";
// import { ShopContext } from "../App";
// const Hero = ({ bannerImg}) => {
// const heroImg= 'https://www.jazzysburger.com/static/media/banner1.2490a3c28c69999d5812.jpg'

// const {showProducts, burgerData}= useContext(ShopContext)
//   const burger = (showProducts,burgerData)=> {
//     return showProducts  ?burgerData.slice(0,6):burgerData;
//    }
// const burgerElements = burger(showProducts, burgerData ).map( (burger)=><Product key={burger.id} burgerData={burger}   /> )

//   return (<div>
//     <div className="">
//     < img src={heroImg} alt="heroImage" className=" h-full w-full rounded-md" />
//   </div> 
//   <div> 

//         <div className=" sm:grid sm:grid-cols-1 grid-cols-2 md:grid-cols-4 h-full py-8 gap-4 ">
//           <img
//             alt="bannerImg"
//             src={bannerImg}
//             className=" hidden md:inline-flex  h-full "
//           />

//           <div className="md:col-start-2 md:col-end-5">
//             <div className="flex justify-center items-center  ">
//               <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto ">
//                 {burgerElements
// }
//               </div>
//             </div>
//           </div>
//         </div>
      
//   </div>
  
//   </div>
    
//   );
// };

// export default Hero;
