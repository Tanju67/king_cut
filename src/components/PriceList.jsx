import img from "../assets/service-bg.jpg";

function PriceList() {
  return (
    <div className="font-primary text-primary-900 bg-white">
      <div className="section-padding">
        <h1 className="title">Price List</h1>
        <h4 className="mb-8 font-bold">Starting at $15</h4>
        <div className="flex flex-col gap-20 sm:mb-20 lg:flex-row">
          <ul className="font-primary mb-10 flex flex-3 flex-col gap-4 text-lg md:text-xl lg:mb-0 lg:text-2xl">
            <li className="flex items-center justify-between font-bold">
              <span>Haircut</span>
              <div className="mx-4 h-4 flex-1 border-b-2"></div>
              <span>$25.00</span>
            </li>
            <li className="flex items-center justify-between font-bold">
              <span>Beard Trim</span>
              <div className="mx-4 h-4 flex-1 border-b-2"></div>
              <span>$15.00</span>
            </li>
            <li className="flex items-center justify-between font-bold">
              <span>Razor Cut</span>
              <div className="mx-4 h-4 flex-1 border-b-2"></div>
              <span>$27.00</span>
            </li>
            <li className="flex items-center justify-between font-bold">
              <span>Shaves</span>
              <div className="mx-4 h-4 flex-1 border-b-2"></div>
              <span>$22.00</span>
            </li>
            <li className="flex items-center justify-between font-bold">
              <span>Styling / Color</span>
              <div className="mx-4 h-4 flex-1 border-b-2"></div>
              <span>$18.00</span>
            </li>
          </ul>
          <div className="flex-2">
            <div className="bg-secondary-500 hover:to-primary-700 relative rounded-4xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-500">
              <img src={img} className="w-full rotate-12 rounded-4xl" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[300px] items-center justify-center bg-emerald-200">
        <p className="text-4xl font-bold">Brooks was Here...</p>
      </div>
    </div>
  );
}

export default PriceList;
