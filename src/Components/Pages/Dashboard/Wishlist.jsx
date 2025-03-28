import { getStoredWishlist } from "../../../Utilities/addToDB";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const storedList = getStoredWishlist().map((id) => parseInt(id));
    const list = products.filter((product) => {
      return storedList.includes(product.product_id);
    });
    setWishlist(list);
  }, [products]);

  const handleRemoveFromWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    const updatedList = storedWishlist.filter((pId) => pId != id);
    const updatedListString = JSON.stringify(updatedList);
    localStorage.setItem("wishlist", updatedListString);
    const storedList = getStoredWishlist().map((id) => parseInt(id));
    const list = products.filter((product) => {
      return storedList.includes(product.product_id);
    });
    setWishlist(list);
    toast("Item removed from the wishlist!", {
      autoClose: 1000,
    });
  };

  return (
    <div className="sm:w-10/12 w-11/12 mx-auto py-10">
      <h3 className="text-[#0B0B0B] font-[700] text-xl">
        Wishlist: {wishlist.length} {wishlist.length > 1 ? "Items" : "Item"}
      </h3>
      <div className="flex flex-col gap-5 py-5">
        {wishlist.map((product) => {
          return (
            <WishlistCard
              key={product.product_id}
              product={product}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
