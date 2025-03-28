import { getStoredWishlist, getStoredCart } from "./addToDB";

const removeFromWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  const updatedList = storedWishlist.filter((pId = id) => pId != id);
  const updatedListString = JSON.stringify(updatedList);
  console.log(updatedList);
  localStorage.setItem("wishlist", updatedListString);
  console.log("Removed from Wishlist!");
};

const removeFromCart = (id) => {
  const storedCart = getStoredCart();
  const updatedList = storedCart.filter((product_id) => product_id != id);
  const updatedListString = JSON.stringify(updatedList);
  localStorage.setItem("cart", updatedListString);
  console.log("Removed from Cart!");
};

export { removeFromWishlist, removeFromCart };
