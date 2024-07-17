import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-14 flex items-center justify-between px-6 md:px-14 bg-[#fff9f1]"
    >
      <div className="text-black">LOGO</div>
      <div className="font-medium whitespace-nowrap text-primary-foreground">
        <SlideTabs />
      </div>
      <div className="">
        <Link to="/login">
          <Button variant="" size="sm" className="rounded-full">
            Sign In
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full border-[#61a6faad] bg-transparent p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Universities</Tab>
      <Tab setPosition={setPosition}>Application Status</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer py-1 px-3 text-sm capitalize text-black hover:text-white transition-all duration-300"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#67aaf7] text-white"
    />
  );
};

export default NavBar;
