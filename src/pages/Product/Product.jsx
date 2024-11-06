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
    <div className="relative min-h-screen pb-[700px] md:pb-0">
      <Header />
      <div className="bg-purple-600 text-white py-5 rounded-xl h-60 md:h-96">
        <Heading
          title={"Product Details"}
          p={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
      
      {/* Card */}
      <div className="flex flex-col lg:flex-row absolute top-52 md:top-40 lg:top-32 bg-white md:mx-20 lg:mx-40 p-5 lg:p-10 my-20 rounded-xl shadow-lg space-y-5 lg:space-y-0 lg:space-x-10">
        <div className="flex justify-center lg:justify-start lg:w-1/2">
          <div className="p-5 rounded-xl border">
            <img
              className="rounded-2xl w-full h-64 md:h-96 object-cover"
              src={product_image}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 mt-5 lg:mt-0 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold">{product_title}</h1>
          <span className="font-semibold text-lg">Price: ${price}.00</span>
          <div>
            <span
              disabled={true}
              className={`rounded-full text-sm p-1 px-4 ${
                availability
                  ? "bg-green-100 text-green-600 border border-green-500"
                  : "bg-red-100 text-red-600 border border-red-500"
              } `}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <p className="text-gray-500 text-sm md:text-base">{description}</p>
          <div>
            <h4 className="font-bold">Specification: </h4>
            <ul className="text-gray-500 ml-2 list-disc list-inside">
              {Specification.map((item, idx) => (
                <li key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bold">Rating</span>
            <div className="flex items-center gap-1">
              <ReactStars
                count={5}
                size={24}
                value={rating}
                activeColor="#ffd700"
              />
              <span>{rating}</span>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => handelAddToCart(findProduct)}
              className="flex items-center gap-2 btn rounded-full bg-purple-600 text-white px-4 py-2 text-sm md:text-base"
            >
              Add to Cart <IoCartOutline className="text-lg" />
            </button>
            <button
              onClick={() => handelWishlistBtn(findProduct)}
              disabled={isAdded}
              className="flex items-center gap-2 btn rounded-full text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 text-sm md:text-base"
            >
              <FaRegHeart className="text-lg" /> {isAdded ? "Added" : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
