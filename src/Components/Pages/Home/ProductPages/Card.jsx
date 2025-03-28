import PropTypes from "prop-types";
import { Link } from "react-router";
const Card = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;

  return (
    <div className="shadow-xl bg-white rounded-3xl p-5 w-full object-cover flex flex-col items-start justify-between gap-2">
      <img
        src={product_image}
        alt={product_title}
        className="rounded-xl w-full h-2/3 object-cover"
      />
      <h2 className="font-[600] text-[#09080F] text-lg">{product_title}</h2>
      <p className="text-[#09080F99] text-base font-[500]">Price: ${price}</p>
      <Link
        to={`/products/${product_id}`}
        className="btn btn-outline text-[#9538E2] hover:text-white hover:bg-[#9538E2] hover:border-[#9538E2] rounded-full text-sm font-[600]"
      >
        View Details
      </Link>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
