const Exchange = () => {
    return (
      <div className="pt-12 p">
        <div>
          <h2 className="text-blue-900 font-semibold text-xl md:text-4xl">Foreign Exchange Rates</h2>
        </div>
        <div className="md:flex items-center rounded-md justify-between border border-blue-100 sm:m-10 m-2 mb-10 grid grid-cols-3 gap-5 lg:m-20 mt-10 p-4 lg:pl-20 lg:pr-10">
            <div className="items-start mb-5">
                <h3 className="text-gray-800 text-sm lg:text-lg  font-extrabold">BIST<span className="text-xs text-green-500">100</span></h3>
                <p className="text-gray-600 text-left text-sm sm:text-md">9.693.460</p>
                <p className="text-gray-400 text-left text-xs sm:text-sm">Current Rate</p>
            </div>

            <div className="items-start">
                <h3 className="text-gray-800 text-sm lg:text-lg font-extrabold">USD</h3>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Buy</span>31.6733</p>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Sell</span>33.9202</p>
                <p className="text-gray-400 text-left text-xs sm:text-sm">Current Rate</p>
            </div>

            <div>
               <h3 className="text-gray-800 text-sm lg:text-lg font-extrabold">EURO</h3>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Buy</span>33.751</p>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Sell</span>36.1454</p>
                <p className="text-gray-400 text-left text-xs sm:text-sm">Current Rate</p>
            </div>

            <div>
                <h3 className="text-gray-800 text-sm lg:text-lg font-extrabold">GPB</h3>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Buy</span>39.1862</p>
                <p className="text-gray-600 text-left text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Sell</span>41.9661</p>
                <p className="text-gray-400 text-left text-xs sm:text-sm">Current Rate</p>
            </div>

            <div>
                <h3 className="text-gray-800 text-sm lg:text-lg lg:text-center font-extrabold">Gold</h3>
                <p className="text-gray-600 text-left lg:text-center text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Buy</span>2418.04</p>
                <p className="text-gray-600 text-left lg:text-center text-sm sm:text-md flex gap-5"> <span className="text-sm font-extrabold">Sell</span>2595.98</p>
                <p className="text-gray-400 text-left lg:text-center text-xs sm:text-sm">Current Rate</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Exchange;