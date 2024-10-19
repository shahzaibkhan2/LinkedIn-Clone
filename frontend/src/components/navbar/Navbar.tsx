"use client";
import { LeftNav, MiddleNav, RightNav } from "..";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between px-[5%] xl:px-[10%] bg-white w-full z-50 pt-1 fixed top-0`}
    >
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </nav>
  );
};

export default Navbar;
