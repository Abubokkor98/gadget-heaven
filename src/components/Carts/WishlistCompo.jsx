import { FaRegTrashCan } from "react-icons/fa6";

const WishlistCompo = ({ wishlist }) => {
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
          <h1 className="font-bold text-xl md:text-2xl">{wishlist?.product_title}</h1>
          <p className="text-sm md:text-base">{wishlist?.description}</p>
          <span className="font-bold text-base md:text-lg mt-5">
            Price: ${wishlist?.price}.00
          </span>
          <button className="btn w-full md:w-fit rounded-full text-white bg-purple-600 px-5 md:px-7">
            Add To Cart
          </button>
        </div>
      </div>

      <button className="cursor-pointer mt-5 md:mt-0 self-center">
        <FaRegTrashCan className="text-2xl md:text-3xl text-red-500" />
      </button>
    </div>
</div>
  );
};

export default WishlistCompo;
