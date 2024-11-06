import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const ProductContext = createContext();
const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const MainRoot = () => {
  const [products, setProducts] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);
  const [historyArray, setHistoryArray] = useState([]);

  const handelAddToCart = (cartItem) => {
    setCartArray((prev) => [...prev, cartItem]);
    toast.success("Item added to cart", msgInfo);
  };

  const handelWishlist = (wishlistItem) => {
    const findToWishlist = wishlistArray.find(
      (item) => item.product_id === wishlistItem.product_id
    );
    if (!findToWishlist) {
      setWishlistArray((prev) => [...prev, wishlistItem]);
      toast.success("Item added to Wishlist!", msgInfo);
    } else {
      toast.error("Product Already Exist in Wishlist!", msgInfo);
    }
  };

  const getProducts = async () => {
    const response = await fetch("../data/products.json");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="pt-3">
      <div className="max-w-screen-xl mx-auto">
        <ProductContext.Provider
          value={{
            products,
            handelAddToCart,
            handelWishlist,
            cartArray,
            wishlistArray,
            setCartArray,
            historyArray,
            setHistoryArray,
          }}
        >
          <div className="min-h-[calc(100vh-556px)]">
            <Outlet />
          </div>
        </ProductContext.Provider>
      </div>
      {/* footer */}
      <div className="mt-32 max-w-screen-2xl mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainRoot;
