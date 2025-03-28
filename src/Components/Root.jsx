import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="sora bg-[#F6F6F6]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
