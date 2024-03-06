import getstarted from "../assets/getstarted.png";
function GetStarted() {
  return (
    <div className="bg-xblue p-8 rounded-[1.5rem] text-white w-[40%] flex flex-col items-center gap-5">
      <h1 className="font-bold text-[2rem]">Get Started with KoinX for Free</h1>
      <p>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports
      </p>
      <img src={getstarted} alt="" />
      <button className="text-xl bg-white font-bold px-5 py-1.5 rounded-lg text-stone-900">
        Get Started for FREE
      </button>
    </div>
  );
}

export default GetStarted;
