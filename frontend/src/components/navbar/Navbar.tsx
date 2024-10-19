const Navbar = () => {
  const { stickyNav } = useMainContext();

  return (
    <nav
      className={`flex justify-between px-[5%] xl:px-[10%] bg-white w-full z-50 pt-1 ${stickyNav} top-0`}
    >
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </nav>
  );
};

export default Navbar;
