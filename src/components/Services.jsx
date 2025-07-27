import servicebg from "../assets/service-bg.jpg";
import img1 from "../assets/services/img1.jpg";
import img2 from "../assets/services/img2.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <h1 className="title">Services</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group relative w-full overflow-hidden rounded-4xl">
            <img
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
              src={img1}
              alt=""
            />
            <div className="group-hover:border-secondary absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-4xl border-2 border-white text-xl font-bold transition-all duration-300 group-hover:border-8 lg:text-2xl">
              <p className="absolute bottom-4 w-full px-4 text-white">
                <span>Haircut</span>
              </p>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-4xl">
            <img
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
              src={img2}
              alt=""
            />
            <div className="group-hover:border-secondary absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-4xl border-2 border-white text-xl font-bold transition-all duration-300 group-hover:border-8 lg:text-2xl">
              <p className="absolute bottom-4 w-full px-4 text-white">
                <span>Washing</span>
              </p>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-4xl">
            <img
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
              src={img3}
              alt=""
            />
            <div className="group-hover:border-secondary absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-4xl border-2 border-white text-xl font-bold transition-all duration-300 group-hover:border-8 lg:text-2xl">
              <p className="absolute bottom-4 w-full px-4 text-white">
                <span>Shaves</span>
              </p>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-4xl">
            <img
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
              src={img4}
              alt=""
            />
            <div className="group-hover:border-secondary absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-4xl border-2 border-white text-xl font-bold transition-all duration-300 group-hover:border-8 lg:text-2xl">
              <p className="absolute bottom-4 w-full px-4 text-white">
                <span>Kids</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="flex h-full w-full items-center justify-center bg-cover bg-fixed px-10 py-20"
          style={{ backgroundImage: `url(${servicebg})` }}
        >
          <form className="rounded-4xl bg-white p-10 md:w-[80%]">
            <h2 className="subtitle mb-2 text-center">Book an Appointment</h2>
            <p className="main-text mb-2 text-center">
              Please fill out the form below to book an appointment
            </p>
            <div className="flex flex-wrap justify-between text-gray-500">
              <div className="w-full md:w-[48%]">
                <input
                  className="focus:bg-secondary-200 mb-4 w-full rounded-md border-2 border-gray-200 p-2 outline-0"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="w-full md:w-[48%]">
                <input
                  className="focus:bg-secondary-200 mb-4 w-full rounded-md border-2 border-gray-200 p-2 outline-0"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full md:w-[48%]">
                <input
                  className="focus:bg-secondary-200 mb-4 w-full rounded-md border-2 border-gray-200 p-2 outline-0"
                  type="time"
                  value="10:00"
                  readOnly
                />
              </div>
              <div className="w-full md:w-[48%]">
                <input
                  className="focus:bg-secondary-200 mb-4 w-full rounded-md border-2 border-gray-200 p-2 outline-0"
                  type="date"
                />
              </div>
              <div className="w-[100%]">
                <textarea
                  className="focus:bg-secondary-200 mb-4 w-full rounded-md border-2 border-gray-200 p-2 outline-0"
                  placeholder="Message (Optionals)"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Services;
