import Banner from "./Banner";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Headers = () => {
  return (
    <div className="relative">
      <TopHeader />
      <MiddleHeader />
      <Navbar />
      <Banner />
    </div>
  );
};

export default Headers;
