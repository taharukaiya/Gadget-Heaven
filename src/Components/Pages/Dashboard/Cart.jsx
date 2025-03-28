import { useLoaderData, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getStoredCart } from "../../../Utilities/addToDB";
import CartCard from "./CartCard";
import { toast } from "react-toastify";
import group from "../../../assets/images/Group.png";
import frame from "../../../assets/images/Frame.png";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const products = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const storedList = getStoredCart().map((id) => parseInt(id));
    const list = products.filter((product) => {
      return storedList.includes(product.product_id);
    });
    setCartList(list);
  }, [products]);

  let totalPrice = 0;
  for (let product of cartList) {
    totalPrice += product.price;
  }

  const handleRemoveFromCart = (id) => {
    const storedCartList = getStoredCart();
    const updatedList = storedCartList.filter((pId) => pId != id);
    const updatedListString = JSON.stringify(updatedList);
    localStorage.setItem("cart", updatedListString);
    const storedList = getStoredCart().map((id) => parseInt(id));
    const list = products.filter((product) => {
      return storedList.includes(product.product_id);
    });
    setCartList(list);
    toast("Item removed from the cart!", {
      autoClose: 1000,
    });
  };

  const handleSortByPrice = () => {
    const sortedList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedList);
  };

  const handlePurchase = () => {
    setFinalPrice(totalPrice);
    setIsModalOpen(true);
    setCartList([]);
    localStorage.removeItem("cart");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="sm:w-10/12 w-11/12 mx-auto py-10">
      {/* Label Part */}
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[#0B0B0B] font-[700] text-xl">
          Cart: {cartList.length} {cartList.length > 1 ? "Items" : "Item"}
        </h3>
        <div className="flex flex-row gap-2 sm:gap-4 justify-between items-center">
          <p className="text-[#0B0B0B] font-[700] text-base">
            Total Cost: ${totalPrice}
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 justify-between items-center">
            <button
              onClick={handleSortByPrice}
              className="font-[500] shadow-sm px-4 py-2 max-w-44 rounded-full bg-white sm:text-base text-xs text-[#9538E2] border-[#9538E2] border flex flex-row justify-center items-center gap-1"
            >
              <span>Sort By Price</span>
              <img className="w-5" src={frame} />
            </button>
            <button
              onClick={handlePurchase}
              disabled={cartList.length === 0 || totalPrice === 0}
              className={`font-[500] text-white shadow-sm px-4 py-2 max-w-36 rounded-full sm:text-base text-xs border ${
                cartList.length === 0 || totalPrice === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#9538E2]"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Cards Part */}
      <div className="flex flex-col gap-5 py-5">
        {cartList.map((product) => {
          return (
            <CartCard
              key={product.product_id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg p-9 w-96 text-center gap-5">
            <img src={group} alt="Success Image" />
            <h2 className="text-2xl font-bold text-[#9538E2] mb-2">
              Payment Successfully
            </h2>
            <p className="text-[#09080F99] font-[500] my-2 flex flex-col gap-2">
              <span>Thanks for purchasing.</span>
              <span>Total: ${finalPrice}</span>
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full border hover:border-[#9538E2] shadow-sm text-base font-[600] px-6 py-2 bg-[#11000008] text-[#09080F] hover:bg-[#9538E2] hover:text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
