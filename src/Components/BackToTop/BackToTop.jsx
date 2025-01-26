const BackToTop = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
          onClick={handleBackToTop}
          className="w-full bg-[#37475A] flexDisplay leading-[40px] text-white hover:bg-[#2b3442]"
        >
          Back to top
        </button>

    );
}
 
export default BackToTop;