function Home() {
  return (
    <div className="bg-custom font-primary flex items-center justify-center text-white sm:min-h-screen sm:p-48">
      <div className="px-10 py-40">
        <h1 className="mb-4 text-center text-4xl font-bold tracking-widest sm:mb-10 sm:text-6xl lg:text-9xl">
          <span className="text-secondary-500">King's</span> Cut
        </h1>
        <p className="font-secondary text-center text-lg sm:text-xl lg:text-3xl">
          Get Your Hair Cut, Style, and Color. We will take care of the rest.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:gap-8">
          <button className="border-secondary-500 font-secondary hover:bg-secondary-500 hover:text-primary-900 mb-4 w-[200px] rounded-3xl border-4 p-2 text-lg transition-all duration-300 ease-in-out">
            Book Appointment
          </button>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
