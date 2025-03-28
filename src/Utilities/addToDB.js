import { toast } from "react-toastify";

const getStoredWishlist = () => {
  const storedList = JSON.parse(localStorage.getItem("wishlist"));

  if (storedList) {
    return storedList;
  } else {
    return [];
  }
};

const addToWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  if (storedWishlist.includes(id)) {
    toast.error("This item already exists the the wishlist!", {
      autoClose: 1000,
    });
  } else {
    storedWishlist.push(id);
    const storedListString = JSON.stringify(storedWishlist);
    localStorage.setItem("wishlist", storedListString);
    toast.success("Item successfully added to the wishlist!", {
      autoClose: 1000,
    });
  }
};

const getStoredCart = () => {
  const storedList = JSON.parse(localStorage.getItem("cart"));

  if (storedList) {
    return storedList;
  } else {
    return [];
  }
};

const addToCart = (id) => {
  const storedCart = getStoredCart();
  if (storedCart.includes(id)) {
    toast.error("This item already exists in the cart!", {
      autoClose: 1000,
    });
  } else {
    storedCart.push(id);
    const storedListString = JSON.stringify(storedCart);
    localStorage.setItem("cart", storedListString);
    toast.success("Item successfully added to the cart!", {
      autoClose: 1000,
    });
  }
};

export { getStoredWishlist, addToWishlist, getStoredCart, addToCart };
