import { useContext } from "react";
import Product from "../components/product";
import { ShopContext } from "../App";

import { Link, useNavigate } from "react-router-dom";

const Hero = ({ bannerImg }) => {
  const heroImg =
    "https://www.jazzysburger.com/static/media/banner1.2490a3c28c69999d5812.jpg";

  const { burgerData } = useContext(ShopContext);

  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/shop");
  };
  const burgerElements = burgerData
    .slice(0, 6)
    .map((burger) => <Product key={burger.id} burgerData={burger} />);

  return (
    <div>
      <div className="">
        <img
          src={heroImg}
          alt="heroImage"
          className=" h-full w-full rounded-md"
        />
      </div>
      <div>
        <div className=" sm:grid sm:grid-cols-1 grid-cols-2 md:grid-cols-4 h-full py-8 gap-4 ">
          <img
            alt="bannerImg"
            src={bannerImg}
            className=" hidden md:inline-flex  h-full "
          />

          <div className="md:col-start-2 md:col-end-5">
            <div className="flex justify-center items-center  ">
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto ">
                {burgerElements}
              </div>
            </div>
            <div className="flex items-center justify-center m-2">

              {/* <Link to='/shop' className='rounded-md  py-1 px-2 bg-red-600 mx-auto w-24 text-center'>  more</Link>
               */}

              <button
                onClick={handleItemClick}
                className="rounded-md  py-1 px-2 bg-red-600 mx-auto w-24 text-center"
              >
              
                more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
