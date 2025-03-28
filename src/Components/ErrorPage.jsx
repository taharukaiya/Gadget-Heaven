import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error | Gadget Heaven</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-9xl font-extrabold text-[#9538E2]">404</h1>
        <h3 className="text-3xl font-bold text-[#0B0B0B] mt-4">
          Oops! Page Not Found
        </h3>
        <p className="text-lg text-[#6B7280] mt-2 text-center">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="mt-6">
          <button className="px-6 py-3 bg-[#9538E2] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#7a2db5] transition duration-300">
            Go Back to Home
          </button>
        </Link>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error Illustration"
          className="mt-8 w-96"
        />
      </div>
    </>
  );
};

export default ErrorPage;
