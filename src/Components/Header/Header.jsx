
const Header = () => {
  
  return (
    <>
      {/* Desktop Header Start */}
      <div className="hidden zIndex lg:flex w-full h-[60px] bg-firstColor fixed top-0 left-0 justify-around items-center">
        {/* Logo */}
        <a
          href="#"
          className="hover:scale-105 transition-all duration-200 mt-2"
        >
          <img
            src="./Images/Header/AmazonLogo.png"
            alt="Logo"
            className=""
            width="115"
          />
        </a>
        {/* Location */}
        <div className="HeaderBorder flexDisplay w-[170px] p-1">
          <img src="./Images/SVG/Location.svg" alt="Location" width="30" />
          <div className="">
            <div className="text-gray-300 text-[13px] leading-3">
              Delivering to New York
            </div>
            <div className="text-white font-bold">Update location</div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="SearchBar flex justify-around  items-center rounded-md w-[40vw] h-[40px] overflow-hidden focus-within:border-[#F69302] focus-within:border-[4px] box-content">
          <button className="w-[62px] bg-[#E6E6E6] h-[40px] flex justify-center items-center gap-2 text-[14px] hover:bg-[#cfcfcf]">
            All
            <img
              src="./Images/SVG/DownSideTriangle.svg"
              alt="DownSideTriangle"
              width="8"
            />
          </button>
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full h-full pl-4 placeholder:text-black focus:outline-none SearchBarFocus"
          />
          <div className="w-[50px] h-[50px] bg-[#FDBD69] hover:bg-[#cb9855] flexDisplay cursor-pointer">
            <img
              src="./Images/SVG/SearchBar.svg"
              alt=""
              width="25"
            />
          </div>
        </div>
        {/* Language */}
        <div className="flexDisplay gap-1 w-[55px] p-1 HeaderBorder">
          <img src="./Images/SVG/FlagUSA.svg" alt="" width="20" />
          <div className="text-white font-bold">EN</div>
        </div>
        {/* Login */}
        <div className="text-white w-[150px] p-1 HeaderBorder">
          <div className="text-[13px] leading-3">Hello, Sign in</div>
          <div className="font-bold flex items-center gap-2">
            Account & Lists
            <img src="./Images/SVG/DownSideTriangle.svg" alt="" />
          </div>
        </div>
        {/* Return Order */}
        <div className="text-white w-[75px] p-1 HeaderBorder">
          <div className="leading-3">Return</div>
          <div className="">& Orders</div>
        </div>
        {/* Shopping Cart */}
        <div className="h-[60px] flex justify-center items-center relative HeaderBorder">
          <div className="">
            <img
              src="./Images/SVG/Shopping Cart.svg"
              alt="Shopping Cart"
              width="35"
            />
            <div className="absolute text-orange-500 top-[7px] left-[14px] font-bold">
              0
            </div>
          </div>
          <div className="text-white font-bold mt-4">Cart</div>
        </div>
      </div>

      {/* Desktop Header ENd */}

      {/* Mobile Header Start */}
      <div className="lg:hidden block w-full h-[60px] zIndex bg-firstColor fixed top-0 left-0"></div>
      {/* Mobile Header ENd */}
    </>
  );
};

export default Header;
