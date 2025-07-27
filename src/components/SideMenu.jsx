import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function SideMenu({ activeSection }) {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <div className="font-primary text-primary-100 hidden h-screen w-[25%] items-center justify-center tracking-widest uppercase md:flex">
        <nav className="bg-primary-900 fixed right-[0] left-[75%] flex h-screen w-[25%] flex-col items-center justify-center gap-20">
          <div className="text-4xl font-bold">
            <img className="w-[200px]" src={logo} alt="" />
          </div>
          <ul className="flex flex-col items-center justify-center gap-6 text-3xl font-bold">
            <li
              className={activeSection === "home" ? "text-secondary-500" : ""}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={activeSection === "about" ? "text-secondary-500" : ""}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={
                activeSection === "services" ? "text-secondary-500" : ""
              }
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={activeSection === "price" ? "text-secondary-500" : ""}
            >
              <a href="#price">Price</a>
            </li>
            <li
              className={
                activeSection === "contact" ? "text-secondary-500" : ""
              }
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button
          id="menu-btn"
          className={
            "hamburger z-50 block focus:outline-none md:hidden" +
            (hamburger ? " open" : "")
          }
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <motion.div
          variants={{
            hidden: { height: 0, opacity: 0 },
            show: { height: "100vh", opacity: 1 },
          }}
          initial="hidden"
          animate={hamburger ? "show" : "hidden"}
          transition={{ duration: 0.3 }}
          exit="hidden"
          className="bg-primary-900 fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-20 md:hidden"
        >
          <nav className="bg-primary-900 flex h-screen flex-col items-center justify-center gap-20">
            <div className="text-4xl font-bold">
              <img className="w-[200px]" src={logo} alt="" />
            </div>
            <ul className="text-primary-100 flex flex-col items-center justify-center gap-6 text-5xl font-bold">
              <li
                onClick={() => setHamburger(false)}
                className={activeSection === "home" ? "text-secondary-500" : ""}
              >
                <a href="#home">Home</a>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className={
                  activeSection === "about" ? "text-secondary-500" : ""
                }
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className={
                  activeSection === "services" ? "text-secondary-500" : ""
                }
              >
                <a href="#services">Services</a>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className={
                  activeSection === "price" ? "text-secondary-500" : ""
                }
              >
                <a href="#price">Price</a>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className={
                  activeSection === "contact" ? "text-secondary-500" : ""
                }
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </>
  );
}
