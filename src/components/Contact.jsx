import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="section-padding border-primary-900 bg-secondary-100 border-b-16">
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="flex-1 md:max-h-[500px]">
          <div className="bg-primary-500 h-full max-w-[400px] rounded-4xl">
            <div className="bg-secondary-500 flex h-full max-w-[400px] rotate-12 items-center justify-center rounded-4xl">
              <div className="font-primary -rotate-12 text-2xl tracking-widest">
                <p className="text-xl text-white md:text-2xl lg:text-3xl">
                  OPEN DAILY
                </p>
                <p className="main-text">10:00 - 20:00 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">(+49) 123 456 789</p>
          <p className="mb-4 text-lg md:text-xl lg:text-2xl">
            4H4lM@example.com
          </p>
          <div className="text-primary-300 flex gap-4 text-2xl">
            <FaFacebook className="hover:text-primary-600 transition-all duration-300 hover:scale-110" />
            <FaInstagramSquare className="hover:text-primary-600 transition-all duration-300 hover:scale-110" />
            <FaWhatsappSquare className="hover:text-primary-600 transition-all duration-300 hover:scale-110" />
          </div>
          <footer className="mt-4">
            <p className="text-sm text-gray-500 lg:w-1/2">
              Design does not belong to me. This project is based on a
              TemplateMo design, which I modified for the purpose of practicing
              my Tailwind CSS skills. It is not intended for any commercial use.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
