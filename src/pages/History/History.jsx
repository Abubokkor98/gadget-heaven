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
  console.log(historyArray);
  useEffect(() => {
    document.title = "History | GadgetHeaven ";
  }, []);
  return (
    <>
      <div className="p1 pt-6">
        <Header />
        <div className="bg-purple-600 text-white py-5  rounded-xl">
          <Heading
            title={"History"}
            p={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>

        <div className="flex flex-col items-start mt-10 ">
          <h3 className="font-bold text-2xl">Your Purchase History</h3>
          <hr />
          <div className="font-semibold">
            <div>
            Total cost: ${totalPrice}
            </div>
            <div>
            Total Products: {historyArray.length}
            </div>
          </div>
        </div>
        {historyArray.map((cart) => (
          <Carts cart={cart} key={cart.product_id} isRemove={true} />
        ))}
      </div>
    </>
  );
};

export default History;
