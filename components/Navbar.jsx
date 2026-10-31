import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants";
import ThemeButton from "./ThemeButton";
import Menu from "./../public/assets/icons/menu.svg";
import Close from "./../public/assets/icons/close.svg";
import { slideIn } from "@/utils/motion";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-30 bg-bgPrimaryDark/85 backdrop-filter backdrop-blur-xl border-b border-white/5">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3.5 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* User's Profile Photo */}
          <div className="w-10 h-10 rounded-full relative overflow-hidden ring-2 ring-primary/80 shadow-md shadow-primary/40 group-hover:scale-105 transition-transform duration-300 shrink-0">
            <Image
              src="/assets/vibhas_face.png"
              alt="Vibhas Reddy"
              fill
              sizes="44px"
              className="object-cover object-center"
              priority
            />
          </div>

          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Vibhas Reddy &nbsp;
            <span className="sm:inline hidden font-semibold text-[#915EFF]">
              | Engineer &amp; AI/ML Researcher
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[16px] font-medium cursor-pointer transition-colors duration-200 ${
                active === nav.title
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="cursor-pointer ml-2">
            <ThemeButton />
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain text-white flex justify-center items-center cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </div>

          <motion.div
            variants={slideIn("right", "tween", 0, 0.25)}
            initial="hidden"
            animate={toggle ? "show" : "hidden"}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-bgSecondaryDark/95 backdrop-blur-xl border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-primary font-bold" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10 w-full flex justify-between items-center text-white text-[15px]">
                <span>Theme</span>
                <ThemeButton />
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
