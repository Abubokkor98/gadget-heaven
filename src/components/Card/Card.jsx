import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Card = ({ card }) => {
  const {product_image,product_title,price,rating,slug} = card;
  return (
    <div className="transition md:hover:scale-105 w-full overflow-hidden border rounded-md shadow-md">
      <figure className="p-2 ">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-72 rounded-xl"
        />
      </figure>
      <div className="card-body flex flex-col justify-between min-h-[280px]">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-semibold text-lg">Price: ${price}</p>
        <div className="flex items-center gap-1">
          <ReactStars
            count={5}
            size={30}
            value={rating}
            activeColor="#ffd700"
          />
          <span>{rating}</span>
        </div>
        <div className="card-actions mt-4">
          <Link
            to={`/product/${slug}`}
            className="btn btn-outline text-purple-600 border-purple-600 rounded-full px-6 font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
