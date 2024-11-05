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
    <div>
      <Header />
      <div className="bg-purple-600 text-white py-5  rounded-xl">
        <Heading
          title={"Cart"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* card */}
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">Your Carts Here</h3>
      </div>
      {cartArray.map((cart) => (
        <Carts cart={cart} key={cart.product_id} />
      ))}
    </div>
  );
};

export default CartPage;
