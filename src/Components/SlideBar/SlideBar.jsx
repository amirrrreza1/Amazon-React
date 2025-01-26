import { useRef, useState } from "react";

function SlidableNavbar({ SlideBarData }) {
  const navbarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (navbarRef.current?.offsetLeft || 0));
    setScrollLeft(navbarRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !navbarRef.current) return;
    e.preventDefault();
    const x = e.pageX - navbarRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    navbarRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (navbarRef.current?.offsetLeft || 0));
    setScrollLeft(navbarRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !navbarRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - navbarRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    navbarRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={navbarRef}
      className="no-scrollbar bg-secondColor  flexDisplay  text-white h-[40px] mt-[60px] leading-[40px] overflow-y-hidden touch-none"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <a
        href="#"
        className="hover:border-white hover:border-[1px] !cursor-pointer flexDisplay gap-1"
      >
        <img src="./Images/SVG/Menu.svg" alt="Menu" width="22" />
        Menu
      </a>
      {SlideBarData?.map((item, index) => (
        <div
          key={index}
          className="px-3 flex-shrink-0 text-white text-[14px] hover:border-white hover:border-[1px] !cursor-pointer"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default SlidableNavbar;
