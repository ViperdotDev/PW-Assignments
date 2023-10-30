import "./App.css";
import heroBg from "./assets/hero-image.jpg";
import googleLogo from "./assets/google-logo.png";
function App() {
  return (
    <>
      <div className="wrapper flex ">
        <div className="left-section  flex flex-col justify-center md:items-center">
          <div className="card w-3/4  sm:1/2 md:w-1/2 lg:w-1/2 ml-24 flex flex-col justify-center items-center gap-5 ">
            <div className="login flex flex-col justify-center items-center gap-5">
              <h1 className="text-3xl font-semibold ">Login</h1>
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
            <div className="flex ">
              <p>_______________________ </p>
              <p className="mt-1 mx-2"> Or </p>
              <p>_____________________ </p>
            </div>
            <div className="relative">
              <form
                action=""
                className="font-semibold w-3/4  sm:full md:w-full lg:w-full"
              >
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="email@gmail.com "
                  className="border border-slate-400 w-full px-2 py-2 rounded-sm mb-5 placeholder:font-normal"
                />
                <label htmlFor="password">Password</label>
                <p className="absolute text-base right-28 top-20 sm:right-32 sm:top-20 md:right-0 md:top-20 text-blue-600 font-normal">
                  Forgot password?
                </p>
                <input
                  type="password"
                  name=""
                  id="email"
                  placeholder="Password"
                  className="border border-slate-400 w-full px-2 py-2 rounded-sm mb-5 placeholder:font-normal"
                />
                <button className="bg-blue-500 w-full p-2 text-white rounded-sm font-normal">
                  Login
                </button>
              </form>
            </div>
            <p className="text-slate-500">
              Don&apos;t have account?{" "}
              <span className="text-black">Regsiter here.</span>
            </p>
          </div>
        </div>
        <div className="right-section w-0 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2   h-screen hidden sm:inline md:inline lg:inline xl:inline 2xl:inline ">
          <img className="m-auto h-full " src={heroBg} alt="hero-image" />
        </div>
      </div>
    </>
  );
}

export default App;
