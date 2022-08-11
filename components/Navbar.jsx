import useDarkMode from "../helpers/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [show, setShow] = useState(false);

  return (
    <div className="w-full text-lg font-bold fixed top-0 right-0 z-50 dark:text-gray-900 text-indigo-200 dark:bg-indigo-200 bg-gray-900">
      <div className="flex justify-between h-14 lg:h-16 px-6 sm:w-[475px] lg:w-[1000px] items-center mx-auto ">
        <div className="lg:text-xl">Shelda.</div>
        <div className="flex lg:text-xl">
          {colorTheme === "light" ? (
            <button
              onClick={() => setTheme("light")}
              className="border-[1px] rounded-md border-gray-900 p-1"
            >
              <BsSun />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="border-[1px] rounded-md border-indigo-200 p-1"
            >
              <BsMoon />
            </button>
          )}

          <button
            onClick={() => setShow(!show)}
            className="lg:hidden ml-2 border-[1px] dark:border-gray-900 rounded-md border-indigo-200 p-1"
          >
            <HiMenu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: "0%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: -2, y: "0%" }}
          >
            {show ? (
              <ul className="lg:hidden px-6 py-1 font-semibold text-md dark:text-gray-900 text-indigo-200 dark:bg-indigo-300 bg-gray-800">
                <li className="py-1">Profile</li>
                <li className="py-1">Projects</li>
                <li className="py-1">Contact me</li>
              </ul>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
