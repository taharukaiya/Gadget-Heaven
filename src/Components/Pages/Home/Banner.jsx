import { Link } from "react-router";
import bannerImage from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="bg-[#9538E2] text-white w-11/12 mx-auto rounded-b-3xl">
        {/* Banner Content */}
        <div className="flex flex-col justify-center items-center sm:w-9/12 w-11/12 mx-auto pt-20 sm:pb-60 pb-40 text-center gap-5">
          <h1 className="font-[700] sm:text-5xl text-3xl sm:leading-[4.1rem]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="sm:w-9/12 w-10/11 text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link
            to={"dashboard"}
            className="bg-white text-[#9538E2] border hover:bg-[#9538E2] hover:text-white py-2 px-5 rounded-full font-[700] text-base"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Banner Image */}
      <div className="sm:w-7/12 w-9/12 mx-auto rounded-3xl bg-[#ffffff93] border border-white relative sm:top-[-12rem] top-[-7rem]">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="rounded-[2rem] p-4 max-h-[28rem] w-full object-cover"
        />
      </div>
    </>
  );
};

export default Banner;
