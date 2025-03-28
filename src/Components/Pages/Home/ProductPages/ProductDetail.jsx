import { useParams, useLoaderData } from "react-router";
import { addToWishlist, addToCart } from "../../../../Utilities/addToDB";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useLoaderData().find((p) => p.product_id == productId);
  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const [isWishlistAdded, setIsWishlistAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(productId);
  };

  const handleAddToWishlist = () => {
    if (!isWishlistAdded) {
      addToWishlist(productId);
      setIsWishlistAdded(true);
    }
  };

  return (
    <div className="bg-[#F6F6F6] relative">
      {/* Banner */}
      <div className="bg-[#9538E2] pt-10 pb-48">
        <div className="sm:w-8/12 w-10/12 mx-auto text-center flex flex-col justify-start items-center gap-2">
          <h3 className="text-white font-[700] text-3xl">Product Details</h3>
          <p className="text-white font-[400] text-sm leading-5 w-8/12">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Product Detail Card */}
      <div className="sm:w-8/12 w-10/12 mx-auto bg-white rounded-3xl shadow-2xl relative bottom-[150px] border">
        <div className="grid grid-cols-5 gap-5 p-5 rounded-3xl">
          {/* Image */}
          <img
            className="md:col-span-2 col-span-5 rounded-3xl h-full w-full object-cover shadow-lg border"
            src={product_image}
            alt={product_title}
          />

          {/* Texts */}
          <div className="md:col-span-3 col-span-5 flex flex-col gap-2">
            <h3 className="text-[#09080F] font-[600] text-2xl">
              {product_title}
            </h3>
            <p className="text-[#09080FCC] font-[600] text-lg">
              Price: ${price}
            </p>
            <p
              className={`rounded-full px-2 py-1 text-center text-base font-[500] border ${
                availability
                  ? "bg-[#309C081A] border-[#309C08] text-[#309C08] w-20"
                  : "bg-[#9c08081a] border-[#f71313] text-[#f71313] w-24"
              }`}
            >
              {availability ? "In Stock" : "Stock Out"}
            </p>
            <p className="text-[#09080F99] font-[400] text-base">
              {description}
            </p>
            <div className="text-base">
              <h4 className="text-[#09080F] font-[700]">Specifications</h4>
              <ul className="list-decimal list-inside text-[#09080F99] font-[400]">
                {specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#09080F] font-[700]">Rating: </p>
              <div className="flex flex-row gap-2 items-center justify-start">
                <ReactStars
                  count={5}
                  value={rating}
                  size={23}
                  edit={false}
                  activeColor="#ffd700"
                  isHalf={true}
                />
                <p className="font-[500] text-xs text-[#09080fb4] border bg-[#09080F0D] rounded-full px-2 py-1">
                  {rating}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 items-center justify-start">
              {/* Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex flex-row gap-2 bg-[#9538E2] text-white text-base font-[700] px-3 py-2 rounded-full items-center"
              >
                <span>Add to Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_13_2151)">
                    <path
                      d="M3.3335 15.8333C3.3335 16.2754 3.50909 16.6993 3.82165 17.0118C4.13421 17.3244 4.55814 17.5 5.00016 17.5C5.44219 17.5 5.86611 17.3244 6.17867 17.0118C6.49123 16.6993 6.66683 16.2754 6.66683 15.8333C6.66683 15.3913 6.49123 14.9674 6.17867 14.6548C5.86611 14.3423 5.44219 14.1667 5.00016 14.1667C4.55814 14.1667 4.13421 14.3423 3.82165 14.6548C3.50909 14.9674 3.3335 15.3913 3.3335 15.8333Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 15.8333C12.5 16.2754 12.6756 16.6993 12.9882 17.0118C13.3007 17.3244 13.7246 17.5 14.1667 17.5C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333C15.8333 15.3913 15.6577 14.9674 15.3452 14.6548C15.0326 14.3423 14.6087 14.1667 14.1667 14.1667C13.7246 14.1667 13.3007 14.3423 12.9882 14.6548C12.6756 14.9674 12.5 15.3913 12.5 15.8333Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1668 14.1667H5.00016V2.5H3.3335"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 4.16667L16.6667 5.00001L15.8333 10.8333H5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_2151">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {/* Wishlist Button */}
              <button
                onClick={handleAddToWishlist}
                disabled={isWishlistAdded}
                className={`rounded-full border-2 p-2 ${
                  isWishlistAdded ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_13_2159)">
                    <path
                      d="M16.2501 10.4767L10.0001 16.6667L3.75009 10.4767C3.33784 10.0755 3.01312 9.59334 2.79638 9.06052C2.57963 8.52771 2.47556 7.95579 2.4907 7.38077C2.50585 6.80576 2.63989 6.24011 2.88439 5.71944C3.12888 5.19878 3.47853 4.73437 3.91133 4.35548C4.34412 3.97658 4.85068 3.6914 5.3991 3.5179C5.94752 3.34439 6.52593 3.28631 7.09789 3.34733C7.66986 3.40834 8.223 3.58713 8.72248 3.87242C9.22196 4.15771 9.65696 4.54333 10.0001 5.00499C10.3447 4.54668 10.7802 4.16443 11.2793 3.88217C11.7785 3.5999 12.3305 3.4237 12.9009 3.36459C13.4712 3.30549 14.0477 3.36474 14.5941 3.53865C15.1405 3.71257 15.6451 3.99739 16.0764 4.3753C16.5077 4.75321 16.8563 5.21606 17.1004 5.7349C17.3446 6.25374 17.479 6.8174 17.4953 7.39058C17.5117 7.96377 17.4095 8.53416 17.1952 9.06604C16.9809 9.59792 16.6592 10.0798 16.2501 10.4817"
                      stroke="#3A3A3A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_2159">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
