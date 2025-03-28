import { Outlet, NavLink } from "react-router";

const MainPart = () => {
  return (
    <div className="sm:w-10/12 w-11/12 mx-auto pb-20">
      <h2 className="font-[700] text-[#0B0B0B] text-3xl text-center mb-14">
        Explore Cutting-Edge Gadgets
      </h2>

      {/* Nav and Products Part */}
      <div className="grid grid-cols-6 gap-5">
        {/* Nav */}
        <div className="lg:col-span-1 col-span-2">
          <ul className="flex flex-col gap-3 bg-white justify-center items-center rounded-3xl shadow-xl p-3 text-[#09080fa6] font-[500] text-base">
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"/"}>All Products</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"laptops"}>Laptops</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"phones"}>Phones</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"accessories"}>Accessories</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"smart-watches"}>Smart Watches</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"power-banks"}>Power Banks</NavLink>
            </li>
            <li className=" shadow-sm bg-[#09080F0D] rounded-3xl px-3 py-2 w-full text-center">
              <NavLink to={"chargers"}>Chargers</NavLink>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-5 col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPart;
