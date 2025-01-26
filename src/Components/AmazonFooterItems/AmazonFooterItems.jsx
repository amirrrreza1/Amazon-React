const AmazonFooterItems = ({ AmazonFooterItemsData }) => {
  return (
    <div className="w-full bg-firstColor text-white">
      <div className="w-[90%] max-w-[1000px] m-auto flexDisplay justify-around lg:justify-between flex-wrap gap-x-[40px] py-[50px]">
        {AmazonFooterItemsData?.map((item, index) => (
          <div
            className="w-[150px] lg:w-[100px] h-[70px] hover:underline text-center lg:text-start"
            key={index}
          >
            <div className="text-[11px] font-bold text-[#DEDDDD]">
              {item.title}
            </div>
            <div className="text-[10px] text-[#8D9999] font-bold">
              {item.text}
            </div>
          </div>
        ))}
        <div className="w-full space-y-3">
          <div className="flexDisplay flex-wrap gap-3 text-[12px]">
            <div className="flexDisplay gap-3">
              <p>Conditions of USA</p>
              <p>Privacy Notice</p>
            </div>
            <div className="flexDisplay gap-3">
              <p>Consumer Health Data Pravacy Disclosure</p>
              <p>Your Ads Privacy Choices</p>
            </div>
          </div>
          <div className="text-center p-3 bg-secondColor rounded-3xl">
            Created By Amirreza Azarioun
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonFooterItems;
