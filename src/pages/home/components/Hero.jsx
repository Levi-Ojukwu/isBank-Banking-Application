import { Link } from "react-router-dom";



const Hero = () => {
    return (
      <div className="flex flex-col-reverse lg:flex-row gap-8 mx-1 lg:mx-20 md:mx-10 md:mt-24 items-center bg-blue-100 p-5">
          <div className=" ">
              <h1 className="text-blue-900 text-3xl md:text-5xl text-left font-semibold">Welcome To The Largest E-Banking System</h1>
              <div className="mt-10">
                <Link to="/banking" className="bg-blue-800 font-bold rounded text-white px-4 py-2 hover:text-white hover:bg-blue-500 transition duration-300 border hover:border-blue-300">
                    Online Banking
                </Link>
              </div>
          </div>
          <img className="lg:w-3/4 lg:h-80 h-64 rounded" src="../images/hero-img.webp" alt="Bank Image" />
      </div>
    );
  };
  
  export default Hero;