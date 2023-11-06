import heroImg from "./assets/hero-img.png";
import gmailLogo from "./assets/logo-gmail.png";
import "./App.css";

function App() {
  return (
    <div className="wrapper ">
      <nav className="flex top-1 sticky bg-white  w-full justify-between items-center px-16 py-1 shadow-md">
        <div className="logo flex items-center gap-2">
          <img className="w-8 h-8" src={gmailLogo} alt="gmailLogo" />
          <p className="text-2xl text-gray-600 ">Gmail</p>
        </div>
        <div className="content flex gap-4">
          <button className="text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-sm transition-all duration-300 ease-linear font-medium">
            For work
          </button>
          <button className="text-blue-600 hover:bg-gray-100 hover:border-blue-400 border border-gray-300 bg-slate-50 px-4 py-3 rounded-sm transition-all duration-300 ease-linear font-medium">
            Sign in
          </button>
          <button className="text-white hover:bg-blue-700 bg-blue-600 px-6 text-lg tracking-wide py-3 rounded-sm transition-all duration-300 ease-linear ">
            Create an account
          </button>
        </div>
      </nav>
      <div className="hero flex pt-8 w-full justify-between items-center">
        <div className="hero-left ml-40 w-[450px] flex flex-col gap-8">
          <h1 className="text-6xl leading-tight font-medium text-slate-900">
            Secure, smart, and easy to use email
          </h1>
          <p className="text-xl text-slate-500">
            Get more done with Gmail. Now integrated with Google Chat, Google
            Meet, and more, all in one place.
          </p>
          <div className="buttons__group flex gap-5">
            <button className="text-white hover:bg-blue-700 bg-blue-600 px-4 text-lg tracking-wide py-3 rounded-sm transition-all duration-300 ease-linear ">
              Create an account
            </button>
            <button className="text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-sm transition-all duration-300 ease-linear font-medium">
              For work
            </button>
          </div>
        </div>
        <div className="hero-right w-1/2">
          <img className=" h-full w-auto" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
