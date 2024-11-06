import { useContext, useEffect, useState } from "react";
import Carts from "../../components/Carts/Carts";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import { ProductContext } from "../../layout/Root/MainRoot";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);
  const [sortPrice, setSortPrice] = useState([]);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const {
    cartArray,
    wishlistArray,
    handelAddToCart,
    setCartArray,
    setHistoryArray,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  const handelCartBtn = () => {
    setIsCart(true);
  };
  const handelWishlistBtn = () => {
    setIsCart(false);
  };

  const handelSortByPrice = () => {
    const sortByPriceArray = cartArray.sort((a, b) => b.price - a.price);

    setSortPrice(sortByPriceArray);
  };

  const totalPrice = cartArray.reduce((accumulator, product) => {
    return parseInt(accumulator + product.price);
  }, 0);

  const handelPurchaseBtn = () => {
    sortPrice;
    setCartArray([]);
    toast.success("Item Purchase Successfully", msgInfo);
    document.getElementById("purchaseModel").showModal();
    setHistoryArray((prev) => [...prev, ...cartArray]);

    setTotalPurchasePrice((prev) => prev + totalPrice);
  };

  useEffect(() => {
    document.title = "Dashboard | GadgetHeaven";
  }, []);

  return (
    <div className="p-1 pt-6">
      <Header />
      <div className="bg-purple-600  text-white py-5 rounded-xl h-64">
        <Heading
          title={"Dashboard"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className="flex justify-center items-center gap-2 font-bold ">
          <button
            onClick={handelCartBtn}
            className={`btn rounded-full px-14 ${
              isCart ? "bg-white text-purple-500" : "bg-transparent text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handelWishlistBtn}
            className={`btn border rounded-full px-14  ${
              isCart ? "bg-transparent text-white" : "bg-white text-purple-500"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <h3 className="font-bold text-2xl text-center text-purple-700 md:text-left">
          {isCart ? "Cart" : "Wishlist"}
        </h3>
        {isCart && (
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-0 w-full md:w-auto">
            <div className="font-bold text-xl text-center">
              Total cost: ${totalPrice}
              {totalPrice !== 0 && ".00"}
            </div>
            <div className="flex gap-3 w-full justify-center md:justify-start">
              <button
                onClick={handelSortByPrice}
                disabled={totalPrice === 0 ? true : false}
                className={`btn rounded-full disabled:border-purple-500 text-purple-500 px-10 py-2`}
              >
                Sort by Price <HiAdjustmentsVertical className="text-2xl" />
              </button>
              <button
                onClick={handelPurchaseBtn}
                disabled={totalPrice === 0 ? true : false}
                className={`btn border rounded-full bg-purple-600 text-white px-10 py-2 ${
                  totalPrice === 0 ? "disabled" : ""
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        )}
      </div>

      {/* card */}
      {isCart
        ? cartArray.map((cart) => <Carts cart={cart} key={cart.product_id} />)
        : wishlistArray.map((wishlist) => (
            <WishlistCompo
              key={wishlist.product_id}
              wishlist={wishlist}
              handelAddToCart={handelAddToCart}
            />
          ))}

      {/* modal */}
      <dialog
        id="purchaseModel"
        className="modal modal-middle sm:modal-middle flex justify-center items-center text-center lg:px-0 px-3"
      >
        <div className="modal-box">
          <div className="flex justify-center items-center mt-4 mb-4">
            <img src="./assets/Group.png" className="w-20" alt="" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800">
            Payment Successfully
          </h3>

          <p className="py-4 font-semibold text-xl" id="errorId"></p>
          <h4 className="font-bold text-lg text-gray-800">
            Thanks for purchasing.
          </h4>
          <span className="font-bold ">
            Total cost: ${totalPurchasePrice}.00
          </span>
          <form method="dialog" className="mt-5">
            <button
              onClick={() => navigate("/")}
              className="btn  rounded-full font-bold w-full"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
