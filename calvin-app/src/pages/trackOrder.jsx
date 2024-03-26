import React from "react";

export default function trackOrder(){
    return(
        <div className="bg-white">
        <div className="bg-black h-12">
          <p className="text-white text-center text-sm py-2 sm:py-4">
            Spring Refresh Sale: 20% off | 30% off | 40% off Details
          </p>
        </div>
  
        <div className="flex justify-between items-center px-4 sm:px-8 py-4">
          <p className="text-sm hidden sm:block flex space-x-8">
            New Women Men Underwear Kids Home Essentials Sale
          </p>
          <h1 className="text-lg md:text-xl">Calvin Klein</h1>
        </div>
  
        <div className="px-4 sm:px-8 py-4">
          <p className="text-sm">JENNIE Collection</p>
          <p className="text-2xl">JENNIE | Campaign Collection</p>
        </div>
  
        <img
          src="//media1.calvinklein.com/images/20240227/PLP/PLP_JENNIE_Desktop2.mp4"
          alt=""
          className="w-full"
          ></img>

          <div className="ml-4 sm:ml-20 text-white flex flex-col space-y-2 text-5xl absolute bottom-32 ">
            <h1>JENNIE</h1>
            <h2>in Calvin Klein</h2>
            <div className="text-white flex-col text-xl">
              <h3>Casual can be iconic, it can be everything.</h3>
              <h4> Discover the new season's underwear and denim.</h4>
            </div>
          </div>
    
          <div className="px-4 sm:px-8 pb-4 flex justify-end items-center">
            <p className="text-sm mr-2">Sort By</p>
            <p className="text-lg">Featured</p>
          </div>
    
          <div className="flex flex-wrap justify-center px-4 sm:px-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="bg-red-200 h-72 p-4">
                <p>Product 1</p>
              </div>
            </div>
          </div>
        </div>  
    );
}