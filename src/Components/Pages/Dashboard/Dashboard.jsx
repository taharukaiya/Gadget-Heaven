import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#F6F6F6]">
        {/* Banner */}
        <div className="bg-[#9538E2] py-14">
          <div className="sm:w-8/12 w-10/12 mx-auto text-center flex flex-col justify-center items-center gap-5">
            <h3 className="text-white font-[700] text-3xl">Dashboard</h3>
            <p className="text-white font-[400] text-sm leading-5 w-8/12">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            {/* buttons */}
            <div className="flex flex-row gap-4 justify-center items-center">
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  `px-8 py-2 rounded-full border font-[500] text-base ${
                    isActive
                      ? "bg-white text-[#9538E2]"
                      : "text-white border-white"
                  }`
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="wishlist"
                className={({ isActive }) =>
                  `px-8 py-2 rounded-full border font-[500] text-base ${
                    isActive
                      ? "bg-white text-[#9538E2]"
                      : "text-white border-white"
                  }`
                }
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>

        {/* Dynamic Part */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
