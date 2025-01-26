const SignIn = () => {
  return (
    <div className="w-full h-fit bg-white py-5 flexDisplay flex-col gap-6">
      <hr className="w-full h-[1px] bg-gray-600" />
      <div className="flexDisplay flex-col gap-3">
        <div className="font-bold text-[22px]">
          See Personolized Recommendation
        </div>
        <div className="w-[200px] text-center leading-[30px] text-[14px] bg-yellow-400 rounded-2xl">
          Sign in
        </div>
        <div className="flexDisplay gap-1">
          <div className="text-[13px]">Not custome?</div>
          <div className="text-[11px] underline text-[#2262A1]">Start here</div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-gray-600" />
    </div>
  );
};

export default SignIn;
