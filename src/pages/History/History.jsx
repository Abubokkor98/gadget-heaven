import { useContext, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { ProductContext } from "../../layout/Root/MainRoot";
import Carts from "../../components/Carts/Carts";

const History = () => {
  const { historyArray } = useContext(ProductContext);
  const totalPrice = historyArray.reduce((accumulator, product) => {
    return parseInt(accumulator + product.price);
  }, 0);

  useEffect(() => {
    document.title = "History | GadgetHeaven ";
  }, []);

  return (
    <div className="p-1 pt-6">
      <Header />
      <div className="bg-purple-600 text-white py-5 rounded-xl">
        <Heading
          title={"History"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      <div className="flex flex-col items-center mt-10 space-y-4">
        <h3 className="font-bold text-2xl text-purple-700">Your Purchase History</h3>
        <hr className="w-full border-t-2" />

        <div className="font-semibold text-center md:text-left space-y-2">
          <div className="text-xl">
            Total cost: <span className="font-bold text-purple-600">${totalPrice}</span>
          </div>
          <div className="text-xl">
            Total Products: <span className="font-bold text-purple-600">{historyArray.length}</span>
          </div>
        </div>
      </div>

      {/* history item */}
      <div className="flex flex-col gap-5 mt-5">
        {historyArray.map((cart) => (
          <Carts cart={cart} key={cart.product_id} isRemove={true} />
        ))}
      </div>
    </div>
  );
};

export default History;
