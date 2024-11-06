import { useContext } from "react";
import { ProductContext } from "../../layout/Root/MainRoot";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const WishlistCompo = ({ wishlist,  isRemove = false }) => {
  const { wishlistArray, setWishlistArray } = useContext(ProductContext);

  const handelWishListRemove = (id) => {
    const remove = wishlistArray.filter((item) => item.product_id !== id);
    setWishlistArray(remove);
    toast.warning("Item removed from Wishlist", msgInfo);
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-52 h-52">
            <img
              src={wishlist?.product_image}
              className="bg-gray-400 rounded-xl w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="space-y-2 flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-2xl">
              {wishlist?.product_title}
            </h1>
            <p className="text-sm md:text-base">{wishlist?.description}</p>
            <span className="font-bold text-base md:text-lg mt-5">
              Price: ${wishlist?.price}.00
            </span>
            <button className="btn w-full md:w-fit rounded-full text-white bg-purple-600 px-5 md:px-7">
              Add To Cart
            </button>
          </div>
        </div>

        {!isRemove && (
        <button
          onClick={() => handelWishListRemove(wishlist.product_id)}
          className="self-center cursor-pointer text-red-500"
        >
          <FaRegTrashCan className="text-2xl md:text-3xl" />
        </button>
      )}
      </div>
    </div>
  );
};

export default WishlistCompo;
