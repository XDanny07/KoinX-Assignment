import koinx_logo from "../assets/koinx_logo.svg";
function Navbar() {
  return (
    <nav className="p-[3rem] bg-white flex items-center w-[100%] h-[20px] justify-between">
      <img className="h-[3rem]" src={koinx_logo} alt="KoinX Logo" />
      <div className="font-bold flex gap-4 items-center">
        <a href="/Crypto_Taxes">Crypto Taxes</a>
        <a href="/Free_Tools">Free Tools</a>
        <a href="/Resource_Center">Resource Center</a>
        <a
          className="bg-xblue px-5 py-1.5 rounded-lg text-white"
          href="/Get_Started"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
