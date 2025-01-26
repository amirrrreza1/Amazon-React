
const Footer = ({ FooterItemsData }) => {
    return (
      <div className="w-full bg-secondColor text-white">
        <div className="w-[95%] max-w-[1000px] py-7 m-auto flexDisplay justify-around lg:justify-between flex-wrap gap-6">
          {FooterItemsData?.map((item, index) => (
            <div className="self-start w-[30%] lg:w-[23%]" key={index}>
              <h2 className="font-bold">{item.title}</h2>
              <p className="FooterItem">{item.text1}</p>
              <p className="FooterItem">{item.text2}</p>
              <p className="FooterItem">{item.text3}</p>
              <p className="FooterItem">{item.text4}</p>
              <p className="FooterItem">{item.text5}</p>
              <p className="FooterItem">{item.text6}</p>
              <p className="FooterItem">{item.text7}</p>
              <p className="FooterItem">{item.text8}</p>
              <p className="FooterItem">{item.text9}</p>
            </div>
          ))}
        </div>
        <hr className="w-full h-[1px] bg-gray-800 " />
        <div className="flexDisplay py-10">
          <div className="flexDisplay flex-col md:flex-row justify-around gap-3 w-full p-[10px] lg:w-[60%]">
            <img src="./Images/Header/AmazonLogo.png" alt="Logo" width="100" />
            <div className="flexDisplay gap-3">
              <div className="FooterBorder">English</div>
              <div className="FooterBorder">USD - U.S. Dollor</div>
              <div className="FooterBorder">United States</div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Footer;