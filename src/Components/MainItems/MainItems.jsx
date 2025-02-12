const MainItems = ({ MainItemsData }) => {
  return (
    <>
      <div className="z-10 flexDisplay flex-wrap">
        {MainItemsData?.map((item) => (
          <div key={item.id} className="p-2 w-[190px] md:w-[370px]">
            <div className="w-full">
              {item.Special.length > 0 ? (
                item.Special.map((special, index) => (
                  <div className="w-full bg-white px-4 flexDisplay lg:block flex-wrap" key={index}>
                    <div className="leading-[60px] font-bold text-[10px] md:text-[18px]">
                      {item.title}
                        </div>
                        <img src={special.src } alt="" className="h-[139px] md:h-[251px]" />
                    <a
                      href="#"
                      className="text-[#2262AF] text-[10px] md:text-[13px] leading-[60px]"
                    >
                      {item.link}
                    </a>
                  </div>
                ))
              ) : (
                <div className="w-full gap-3 bg-white px-4">
                  <div className="leading-[60px] font-bold text-[10px] md:text-[18px]">
                    {item.title}
                  </div>
                  <div className="flex flex-wrap gap-y-6 gap-x-3">
                    <a className="w-[45%]">
                      <img src={item.img1} alt="" width="180" height="110" />
                      <p className="text-[12px] line-clamp-1">{item.text1}</p>
                    </a>
                    <a className="w-[45%]">
                      <img src={item.img2} alt="" width="180" height="110" />
                      <p className="text-[12px] line-clamp-1">{item.text2}</p>
                    </a>
                    <a className="w-[45%]">
                      <img src={item.img3} alt="" width="180" height="110" />
                      <p className="text-[12px] line-clamp-1">{item.text3}</p>
                    </a>
                    <a className="w-[45%]">
                      <img src={item.img4} alt="" width="180" height="110" />
                        <p className="text-[12px] line-clamp-1">{item.text4}</p>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="text-[#2262AF] text-[13px] leading-[60px]"
                  >
                    {item.link}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
          </div>
          <div className="relative"></div>
    </>
  );
};

export default MainItems;
