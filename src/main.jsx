import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Statistics from "./Components/Pages/Statistics/Statistics";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Offers from "./Components/Pages/Offers/Offers";
import AllProducts from "./Components/Pages/Home/ProductPages/AllProducts";
import Laptops from "./Components/Pages/Home/ProductPages/Laptops";
import Phones from "./Components/Pages/Home/ProductPages/Phones";
import Accessories from "./Components/Pages/Home/ProductPages/Accessories";
import SmartWatches from "./Components/Pages/Home/ProductPages/SmartWatches";
import PowerBanks from "./Components/Pages/Home/ProductPages/PowerBanks";
import Chargers from "./Components/Pages/Home/ProductPages/Chargers";
import ProductDetail from "./Components/Pages/Home/ProductPages/ProductDetail";
import Cart from "./Components/Pages/Dashboard/Cart";
import Wishlist from "./Components/Pages/Dashboard/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const productsLoader = async () => {
  const response = await fetch("/ProductData.json");
  if (!response.ok) {
    throw new Error("Failed to load products");
  }
  return await response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AllProducts />,
            loader: productsLoader,
          },
          {
            path: "laptops",
            element: <Laptops />,
            loader: productsLoader,
          },
          {
            path: "phones",
            element: <Phones />,
            loader: productsLoader,
          },
          {
            path: "accessories",
            element: <Accessories />,
            loader: productsLoader,
          },
          {
            path: "smart-watches",
            element: <SmartWatches />,
            loader: productsLoader,
          },
          {
            path: "power-banks",
            element: <PowerBanks />,
            loader: productsLoader,
          },
          {
            path: "chargers",
            element: <Chargers />,
            loader: productsLoader,
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: productsLoader,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "cart",
            element: <Cart />,
            loader: productsLoader,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
            loader: productsLoader,
          },
        ],
      },
      {
        path: "special-offers",
        element: <Offers />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: productsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
