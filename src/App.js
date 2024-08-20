// import Header from "./components/header";
// import Hero from "./pages/hero";
// import Shop from "./pages/shop";
// import Cart from "./pages/cart";
// import burgerData from "./data/burgerData";

// import { useState, createContext, useEffect } from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

// const bannerImg =
//   "https://www.jazzysburger.com/static/media/sidebanner.3456c9608105b7e48b54.jpg";

// export const ShopContext = createContext(null);


// const defaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < burgerData.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// function App() {
  
//   const [cartData, setCartData] = useState(defaultCart());
  
// const [allBurgerData, setAllBurgerData]= useState([])
// console.log(allBurgerData);
// useEffect(()=>{fetchData()}, [])

// async function fetchData (){ 
//   const url = 'https://my-burger-api.herokuapp.com/burgers/0';

//     const response = await fetch(url);
//     const result = await response.text();
//   setAllBurgerData(result)
// }

//   const addToCart = (id) => {
//     setCartData((prevState) => ({ ...prevState, [id]: prevState[id] + 1 }));
//   };

//   const removeFromCart = (id) => {
//     setCartData((prevState) => ({ ...prevState, [id]: prevState[id] - 1 }));
//   };

 
//   const updateCartInput = (id, event) => {
//     const value = Number(event.target.value);
//     console.log(value);
//     setCartData((prevState) => ({ ...prevState, [id]: value }));
//   };

//   const getTotalAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartData) {
//       if (cartData[item] > 0) {
//         let itemInfo = burgerData.find(
//           (burger) => burger.id === Number(item)
//         );
//         totalAmount += cartData[item] * itemInfo.price;
//       }
    
//     }
//     return totalAmount.toFixed(2);
//   };

//   // totalAmount= cartData[item] * burgerData[cartData].price
//   const contextValue = {
//     cartData,
//     addToCart,
//     removeFromCart,
//     burgerData,
//     updateCartInput,
//     getTotalAmount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       <Router>
//         <div className="w-11/12 mx-auto">
//           <Header cartData={cartData} />
//           <Routes>
//             <Route path="/" element={<Navigate to="/hero" />} />
//             <Route path="/hero" element={<Hero bannerImg={bannerImg} />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </Router>
//     </ShopContext.Provider>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

const GoodMorning = () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ['Buenos días', 'Bonjour', 'Guten Morgen', 'Buongiorno', 'Selamat pagi'];

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000); // Change language every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl lg:text-[112px] font-bold text-center mb-6 tracking-tighter">
      {languages.map((phrase, index) => (
        <span
          key={index}
          className={`block animate__animated ${
            index === languageIndex ? 'animate__fadeIn' : 'hidden'
          }`}
          style={{ display: index === languageIndex ? 'block' : 'none' }}
        >
          {phrase}
        </span>
      ))}
    </h1>
  );
};

export default GoodMorning;
