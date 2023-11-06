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
      <div className="hero pt-20 flex  justify-around">
        <div className="hero-left w-[450px]">
          <h1 className="text-6xl font-medium text-slate-700">
            Secure, smart, and easy to use email
          </h1>
          <p>
            Get more done with Gmail. Now integrated with Google Chat, Google
            Meet, and more, all in one place.
          </p>
          <button className="text-white hover:bg-blue-700 bg-blue-600 px-6 text-lg tracking-wide py-3 rounded-sm transition-all duration-300 ease-linear ">
            Create an account
          </button>
          <button className="text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-sm transition-all duration-300 ease-linear font-medium">
            For work
          </button>
        </div>
        <div className="hero-right">
          <img className=" h-full w-auto" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
