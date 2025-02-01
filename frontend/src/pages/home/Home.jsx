import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className=" flex justify-end">
          <Link className="  hover:text-indigo-500" to={"/about-us"} >About Us </Link>
          <Link className="ml-5 hover:text-indigo-500" to={"/terms"}>Terms & Conditions</Link>
        </div>
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </>
  );
};
export default Home;
