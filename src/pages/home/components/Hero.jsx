import { Link } from "react-router-dom";



const Hero = () => {
    return (
      <div className="flex gap-8 ml-20 mr-20 mt-24 items-center bg-blue-100 p-5">
          <div className=" ">
              <h1 className="text-blue-900 text-left font-semibold">Welcome To The Largest E-Banking System</h1>
              <div className="mt-10">
                <Link to="/banking" className="bg-blue-800 font-bold rounded text-white px-4 py-2 hover:text-blue-900 hover:bg-white transition duration-300 border hover:border-blue-500">
                    Online Banking
                </Link>
              </div>
          </div>
          <img className="w-3/4 h-80 rounded" src="../images/hero-img.webp" alt="Bank Image" />
      </div>
    );
  };
  
  export default Hero;