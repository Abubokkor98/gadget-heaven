import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../layout/Root/MainRoot";
import Card from "../../components/Card/Card";
import Navbar from "../../layout/Header/Navbar";

const Home = () => {
  const [catProducts, setCatProducts] = useState([]);

  const [isActiveColor, setIsActiveColor] = useState(true);
  const categories = useLoaderData();
  const { products } = useContext(ProductContext);
  const { categoryId } = useParams();

  const handelIsActive = (ind) => {
    setIsActiveColor(ind);
  };

  useEffect(() => {
    if (categoryId === "all-products" || !categoryId) {
      setCatProducts(products.slice(0, 9));
    } else {
      const findProducts = products.filter((category) => {
        return category.category === categoryId;
      });
      setCatProducts(findProducts);
    }
    document.title = "Gadgets | GadgetHeaven";
  }, [categoryId, products]);

  return (
    <>
      <Navbar />
      <div className="mt-80">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="flex flex-col lg:flex-row gap-5 mt-10 ">
          {/* dynamic buttons */}
          <div className="md:w-[20%] border rounded-2xl h-full  flex flex-col gap-5 p-5">
            <NavLink
              onClick={handelIsActive}
              to="/category/all-products"
              className={({ isActive }) =>
                `btn rounded-full  text-white"} ${
                  (isActive ? isActiveColor : "",
                  isActiveColor ? "bg-purple-600 text-white" : "")
                }`
              }
            >
              All Products
            </NavLink>

            {categories.map((category, idx) => (
              <Categories
                key={idx}
                category={category}
                handelIsActive={() => handelIsActive(false)}
              />
            ))}
          </div>

          <div className="md:w-[80%] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 h-full">
            {catProducts.length !== 0 ? (
              <>
                {catProducts.map((card) => (
                  <Card key={card.product_id} card={card} />
                ))}
              </>
            ) : (
              <h1 className="font-bold text-4xl text-purple-600 pt-40">
                Data Not Found
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
