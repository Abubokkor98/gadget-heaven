/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../layout/Root/MainRoot";
import Header from "../../layout/Header/Header";
import Heading from "../../components/Heading/Heading";
import ReactStars from "react-rating-stars-component";

import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  const { products, handelWishlist, handelAddToCart } =
    useContext(ProductContext);
  const [isAdded, setIsAdded] = useState(false);

  const { productId } = useParams();

  if (!products || products.length === 0) {
    return;
  }
  const findProduct = products.find((item) => item.slug === productId);

  const {
    product_title,
    product_image,

    price,
    description,
    Specification,
    availability,
    rating,
  } = findProduct;

  const handelWishlistBtn = (findProduct) => {
    handelWishlist(findProduct);
    setIsAdded(true);
  };

  useEffect(() => {
    document.title = `${product_title} | GadgetHeaven`;
  }, []);
  return (
    <div className="relative h-screen">
      <Header />
      <div className="bg-purple-600 text-white py-5 rounded-xl h-96 ">
        <Heading
          title={"Product Details"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
      {/* card */}
      <div className="flex absolute top-0 bg-white right-0 left-0 lg:mx-40  my-60 rounded-xl">
        <div className=" p-10 ">
          <div className="p-5  rounded-xl border">
            <img
              className="rounded-2xl w-[600px] h-[600px]   object-cover"
              src={product_image}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col mt-10 space-y-3">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <span className="font-semibold text-lg">Price: ${price}.00</span>
          <div>
            <span
              disabled={true}
              className={`rounded-full text-sm  p-1 px-4 ${
                availability
                  ? "bg-green-100 text-green-600 border border-green-500"
                  : "bg-red-100 text-red-600 border border-red-500"
              } `}
            >
              {availability ? "In Stack" : "Out of Stack"}
            </span>
          </div>
          <p className="text-gray-500">{description}</p>
          <div>
            <h4 className="font-bold ">Specification: </h4>
            <ol className="text-gray-500 ml-2">
              {Specification.map((item, idx) => (
                <>
                  <li key={idx}>
                    {idx + 1}. {item}
                  </li>
                </>
              ))}
              <li></li>
            </ol>
          </div>
          <div>
            <span>Rating</span>
            <div className="flex items-center gap-1">
              <ReactStars
                count={5}
                size={30}
                value={rating}
                activeColor="#ffd700"
              />
              <span>{rating}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handelAddToCart(findProduct)}
              className="btn rounded-full bg-purple-600 text-white"
            >
              Add to Cart <IoCartOutline className="text-xl" />
            </button>
            <button
              onClick={() => handelWishlistBtn(findProduct)}
              disabled={isAdded}
              className="btn rounded-full text-lg bg-transparent border"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
