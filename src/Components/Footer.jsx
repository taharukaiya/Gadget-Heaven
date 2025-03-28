const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="sm:w-10/12 w-11/12 mx-auto pt-5">
        <div className="flex flex-col justify-center items-center gap-9">
          {/* Upper Part */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-[700] text-[#09080F] text-3xl">
              Gadget Heaven
            </h2>
            <p className="text-[#09080F99] font-[500] text-base text-center">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>

          {/* Lower Part */}
          <div className="flex sm:flex-row flex-col sm:gap-2 gap-10 justify-evenly w-full border-t pt-9">
            {/* col 1 */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-[700] text-[#09080F] text-lg">Services</h3>
              <ul className="flex flex-col items-center gap-1 text-base text-[#09080F99] font-[400]">
                <li>Product Support</li>
                <li>Order Tracking</li>
                <li>Shipping and Delivery</li>
                <li>Returns</li>
              </ul>
            </div>
            {/* col 2 */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-[700] text-[#09080F] text-lg">Company</h3>
              <ul className="flex flex-col items-center gap-1 text-base text-[#09080F99] font-[400]">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* col 3 */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-[700] text-[#09080F] text-lg">Legal</h3>
              <ul className="flex flex-col  items-center gap-1 text-base text-[#09080F99] font-[400]">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
