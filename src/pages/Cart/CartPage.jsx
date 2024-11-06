import { useContext, useEffect } from "react";
import Carts from "../../components/Carts/Carts";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { ProductContext } from "../../layout/Root/MainRoot";

const CartPage = () => {
  const { cartArray } = useContext(ProductContext);
  
  useEffect(() => {
    document.title = "Cart | GadgetHeaven";
  }, []);
  
  return (
    <div className="p-1 pt-6">
      <Header />
      <div className="bg-purple-600 text-white py-5 rounded-xl">
        <Heading
          title={"Cart"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* Cart Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 md:px-10">
        <h3 className="font-bold text-xl md:text-2xl">Your Carts Here</h3>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-5 mt-5 px-4 md:px-10">
        {cartArray.map((cart) => (
          <Carts cart={cart} key={cart.product_id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
