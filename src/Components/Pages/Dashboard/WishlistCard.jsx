import { PropTypes } from "prop-types";
import cross from "../../../assets/images/Cross.svg";
import { addToCart } from "../../../Utilities/addToDB";

const DashboardCard = ({ product, handleRemoveFromWishlist }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  const handleAddToCart = () => {
    addToCart(product_id);
    handleRemoveFromWishlist(product_id);
  };

  return (
    <div className="grid grid-cols-12 gap-5 sm:p-4 p-2 bg-white rounded-2xl shadow-lg border justify-between">
      {/* Image */}
      <img
        className="lg:col-span-3 col-span-5  border shadow-md rounded-2xl w-full max-h-40 object-cover"
        src={product_image}
        alt={product_title}
      />
      {/* Texts */}
      <div className="lg:col-span-8 col-span-6 flex flex-col items-start justify-between sm:gap-2 gap-1 py-2">
        <h3 className="text-[#09080F] font-[600] sm:text-lg text-base">
          {product_title}
        </h3>
        <p className="text-[#09080F99] sm:text-base text-xs font-[400]">
          <span className="font-[600] text-[#09080F]">Description: </span>
          {description}
        </p>
        <p className="text-[#09080FCC] font-[600] sm:text-base text-xs">
          Price: ${price}
        </p>
        <button
          onClick={handleAddToCart}
          className="font-[500] text-white bg-[#9538E2] shadow-sm px-4 py-2 max-w-36 rounded-full hover:bg-white sm:text-base text-xs hover:text-[#9538E2] hover:border-[#9538E2] border"
        >
          Add to Cart
        </button>
      </div>
      {/* Dissmiss Button */}
      <button
        onClick={() => {
          handleRemoveFromWishlist(product_id);
        }}
        className="col-span-1 flex justify-end items-start"
      >
        <img
          className="border border-[#FF0000] rounded-full sm:p-1 sm:w-auto w-full"
          src={cross}
          alt="Dismiss"
        />
      </button>
    </div>
  );
};

DashboardCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleRemoveFromWishlist: PropTypes.func.isRequired,
};

export default DashboardCard;
