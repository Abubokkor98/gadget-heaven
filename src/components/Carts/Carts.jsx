/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { ProductContext } from "../../layout/Root/MainRoot";
import { toast } from "react-toastify";

const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const Cart = ({ cart, isRemove = false }) => {
  const { cartArray, setCartArray } = useContext(ProductContext);

  const handelCartRemove = (id) => {
    const filterNadRemove = cartArray.filter((item) => item.product_id !== id);
    setCartArray(filterNadRemove);
    toast.warning("Item removed successfully", msgInfo);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 bg-gray-100 rounded-xl p-5">
      {/* Product Image */}
      <div className="w-full md:w-52 h-52 flex-shrink-0">
        <img
          src={cart?.product_image}
          className="bg-gray-400 rounded-xl w-full h-full object-cover"
          alt=""
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col justify-center space-y-2 md:space-y-3 w-full">
        <h1 className="font-bold text-lg md:text-2xl">{cart?.product_title}</h1>
        <p className="text-sm md:text-base text-gray-600">{cart?.description}</p>
        <span className="font-bold text-base md:text-lg mt-3">
          Price: ${cart?.price}.00
        </span>
      </div>

      {/* Remove Button */}
      {!isRemove && (
        <button
          onClick={() => handelCartRemove(cart.product_id)}
          className="self-center cursor-pointer text-red-500"
        >
          <FaRegTrashCan className="text-2xl md:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Cart;
