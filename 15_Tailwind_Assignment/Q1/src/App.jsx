import "./App.css";
import heroBg from "./assets/hero-image.jpg";
import googleLogo from "./assets/google-logo.png";
function App() {
  return (
    <>
      <div className="wrapper flex ">
        <div className="left-section flex flex-col justify-center items-center ">
          <div className="card w-full sm:1/2 md:w-1/2 lg:w-1/2 ml-24 flex flex-col justify-center items-center gap-5 relative">
            <div className="login flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-bold ">Login</h1>
              <p className="text-slate-600">
                Enter your credentials to access your account
              </p>
              <button className="border border-slate-400 w-full px-10 py-2 rounded-md ">
                <img
                  src={googleLogo}
                  className="inline w-5 mr-4"
                  alt="google-logo"
                />
                Login with Google
              </button>
            </div>
            <div>
              <p>----------- Or --------------</p>
            </div>
            <form action="" className="font-semibold">
              <label htmlFor="email">Emaill Address</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="email@gmail.com"
                className="relative border border-slate-400 w-full px-2 py-2 rounded-sm mb-5"
              />
              <label htmlFor="password" className="">
                Password
              </label>
              <p className="absolute right-1 bottom-16 text-blue-600 tracking-tight font-normal">
                Forgot password?
              </p>
              <input
                type="password"
                name=""
                id="email"
                placeholder="Password"
                className="border border-slate-400 w-full px-2 py-2 rounded-sm mb-5"
              />
              <button className="bg-blue-500 w-full p-2 text-white rounded-sm font-normal">
                Login
              </button>
            </form>
            <p className="text-slate-500">
              Don&apos;t have account?{" "}
              <span className="text-black">Regsiter here.</span>
            </p>
          </div>
        </div>
        <div className="right-section w-1/2 h-screen hidden sm:inline md:inline lg:inline xl:hidden 2xl:inline ">
          <img className="m-auto h-full hidden" src={heroBg} alt="hero-image" />
        </div>
      </div>
    </>
  );
}

export default App;
