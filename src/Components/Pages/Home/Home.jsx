import Banner from "./Banner";
import MainPart from "./MainPart";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <div className="">
        <Banner />
        <MainPart />
      </div>
    </>
  );
};

export default Home;
