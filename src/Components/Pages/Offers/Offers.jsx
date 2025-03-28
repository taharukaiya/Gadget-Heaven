import { Helmet } from "react-helmet-async";
import { FaGift } from "react-icons/fa";

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Special Offers | Gadget Heaven</title>
      </Helmet>
      <div className="mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#9538E2] to-[#7a2db5] py-14">
          <div className="sm:w-8/12 w-10/12 mx-auto text-center flex flex-col justify-center items-center gap-5">
            <h3 className="text-white font-[700] text-3xl">Special Offers</h3>
            <p className="text-white font-[400] text-sm leading-5 w-8/12">
              Enjoy exciting cashback offers on every purchase. Whether
              you&apos;re upgrading your tech or shopping for essentials, don’t
              miss out on these unbeatable deals.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="sm:w-10/12 w-11/12 mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
            {/* Card 1 */}
            <div className="card group shadow-lg border border-[#9538e2] bg-white hover:bg-gradient-to-r hover:from-[#9538E2] hover:to-[#7a2db5] hover:text-white transition duration-300 transform hover:scale-105 rounded-lg w-full">
              <div className="card-body p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <FaGift className="text-4xl text-[#9538E2] transition duration-300 group-hover:text-white" />
                </div>
                <h2 className="card-title text-2xl font-bold mb-2">
                  Get $100 Cashback
                </h2>
                <p className="text-base font-medium">
                  Buy gadgets worth $1,0000 + and enjoy $100 cashback!!!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card group shadow-lg border border-[#9538e2] bg-white hover:bg-gradient-to-r hover:from-[#9538E2] hover:to-[#7a2db5] hover:text-white transition duration-300 transform hover:scale-105 rounded-lg w-full">
              <div className="card-body p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <FaGift className="text-4xl text-[#9538E2] transition duration-300 group-hover:text-white" />
                </div>
                <h2 className="card-title text-2xl font-bold mb-2">
                  Get $80 Cashback
                </h2>
                <p className="text-base font-medium">
                  Buy gadgets worth $8000+ and enjoy $80 cashback!!!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card group shadow-lg border border-[#9538e2] bg-white hover:bg-gradient-to-r hover:from-[#9538E2] hover:to-[#7a2db5] hover:text-white transition duration-300 transform hover:scale-105 rounded-lg w-full">
              <div className="card-body p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <FaGift className="text-4xl text-[#9538E2] transition duration-300 group-hover:text-white" />
                </div>
                <h2 className="card-title text-2xl font-bold mb-2">
                  Get $50 Cashback
                </h2>
                <p className="text-base font-medium">
                  Buy gadgets worth $5000+ and enjoy $50 cashback!!!
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card group shadow-lg border border-[#9538e2] bg-white hover:bg-gradient-to-r hover:from-[#9538E2] hover:to-[#7a2db5] hover:text-white transition duration-300 transform hover:scale-105 rounded-lg w-full">
              <div className="card-body p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                  <FaGift className="text-4xl text-[#9538E2] transition duration-300 group-hover:text-white" />
                </div>
                <h2 className="card-title text-2xl font-bold mb-2">
                  Get $20 Cashback
                </h2>
                <p className="text-base font-medium">
                  Buy gadgets worth $2000+ and enjoy $20 cashback!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
