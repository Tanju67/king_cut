import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import aboutbg from "../assets/about-bg.jpg";
import barber1 from "../assets/barber1.jpg";
import barber2 from "../assets/barber2.jpg";

function About() {
  return (
    <div className="border-primary-900 font-secondary min-h-screen border-t-16 bg-white">
      <div className="section-padding">
        <h1 className="title">About Us</h1>
        <p className="main-text mb-8">
          At King’s Cut, we blend tradition with modern style. Our expert
          barbers deliver precision cuts, sharp fades, and classic grooming in a
          welcoming space designed for gentlemen. Since 1988, we’ve been
          committed to making every client look and feel their best. Your style,
          our craft.
        </p>

        <hr className="mb-8 text-gray-200" />

        <h2 className="subtitle mb-20">Our Barbers</h2>
        <div className="mb-20 flex flex-col gap-20 lg:flex-row">
          <div className="p-10">
            <div className="hover:to-primary-700 bg-secondary-500 relative h-[300px] flex-1 rounded-4xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-500 sm:h-[400px] lg:h-auto">
              <img
                className="h-full w-full rotate-8 rounded-4xl object-cover"
                src={barber1}
                alt=""
              />
              <div className="absolute bottom-10 left-1/2 flex w-[80%] translate-x-[-50%] items-center justify-between rounded-4xl bg-white px-4 py-2">
                <p>James</p>
                <div className="text-primary-600 flex gap-4 text-2xl">
                  <FaFacebook className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                  <FaInstagramSquare className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                  <FaWhatsappSquare className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="hover:to-primary-700 bg-secondary-500 relative h-[300px] flex-1 rounded-4xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-500 sm:h-[400px] lg:h-auto">
              <img
                className="h-full w-full rotate-8 rounded-4xl object-cover"
                src={barber2}
                alt=""
              />
              <div className="absolute bottom-10 left-1/2 flex w-[80%] translate-x-[-50%] items-center justify-between rounded-4xl bg-white px-4 py-2">
                <p>Joe</p>
                <div className="text-primary-600 flex gap-4 text-2xl">
                  <FaFacebook className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                  <FaInstagramSquare className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                  <FaWhatsappSquare className="transition-all duration-300 ease-in-out hover:text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-full md:h-[700px]">
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 bg-cover bg-fixed bg-center bg-no-repeat text-white"
          style={{ backgroundImage: `url(${aboutbg})` }}
        >
          <h2 className="text-secondary-500 text-2xl font-bold md:text-3xl lg:text-5xl">
            Get 15% Discount
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">on your first visit</p>
          <button className="bg-secondary-500 font-secondary w-[300px] rounded-3xl p-2 text-lg text-black">
            Promo Code: KINGSCUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
