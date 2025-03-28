import { PropTypes } from "prop-types";
import cross from "../../../assets/images/Cross.svg";

const CartCard = ({ product, handleRemoveFromCart }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="grid grid-cols-12 gap-5 sm:p-4 p-2 bg-white rounded-2xl shadow-lg border ">
      {/* Image */}
      <img
        className="lg:col-span-3 col-span-5  border shadow-md rounded-2xl w-full max-h-40 object-cover"
        src={product_image}
        alt={product_title}
      />
      {/* Texts */}
      <div className="lg:col-span-8 col-span-6 flex flex-col sm:gap-2 gap-2 py-2 justify-center">
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
      </div>
      {/* Dissmiss Button */}
      <button
        onClick={() => {
          handleRemoveFromCart(product_id);
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

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default CartCard;
