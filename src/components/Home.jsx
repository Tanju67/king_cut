function Home() {
  return (
    <div className="bg-custom font-primary flex items-center justify-center p-50 text-white sm:min-h-screen">
      <div>
        <h1 className="mb-10 text-center text-6xl font-bold tracking-widest lg:text-9xl">
          <span className="text-secondary-500">King's</span> Cut
        </h1>
        <p className="font-secondary text-center text-xl lg:text-3xl">
          Get Your Hair Cut, Style, and Color. We will take care of the rest.
        </p>
        <div className="flex items-center justify-center gap-8">
          <button className="border-secondary-500 font-secondary hover:bg-secondary-500 hover:text-primary-900 mt-10 w-[200px] rounded-3xl border-4 p-2 text-lg transition-all duration-300 ease-in-out">
            Book Appointment
          </button>
          <button className="btn mt-10">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
