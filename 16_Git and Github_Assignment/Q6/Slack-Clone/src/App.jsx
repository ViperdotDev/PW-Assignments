import "./App.css";
import googleLogo from "./assets/google-logo.png";
import slackLogo from "./assets/slack-logo.png";
function App() {
  return (
    <>
      <div className="wrapper">
        <nav className="bg-[#541554] flex justify-around items-center text-white font-semibold w-full h-fit py-6">
          <ul className="left flex justify-center items-center gap-6 ">
            <li className="mr-5">
              <a
                href="https://slack.com/intl/en-in/"
                target="_self"
                className="flex gap-2 items-center"
              >
                <img className="h-8 w-8 " src={slackLogo} alt="asas" />
                <p className="text-3xl ">slack</p>
              </a>
            </li>
            <li>
              <a href="">Features ↓</a>
            </li>
            <li>
              <a href="">Solutions ↓</a>
            </li>
            <li className=" hover:underline transition-all ">
              <a href="">Enterprise</a>
            </li>
            <li>
              <a href="">Resources ↓</a>
            </li>
            <li className="hover:underline transition-all">
              <a href="">Pricing</a>
            </li>
          </ul>
          <ul className="right flex justify-center gap-6 items-center">
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href="">Sign in</a>
            </li>
            <li>
              <button className="uppercase border border-white bg-transparent p-3 rounded-md tracking-wider">
                Talk to sales
              </button>
            </li>
            <li>
              <button className="uppercase border border-white bg-white text-[#541554] p-3 rounded-md tracking-wider">
                try for free
              </button>
            </li>
          </ul>
        </nav>
        <main className="bg-[#541554] flex  items-center text-white font-semibold w-full h-fit py-6">
          <div className="main__left w-full h-fit flex justify-between">
            <div className="main__left__header ">
              <p className="text-6xl block">
                Made for people.
                <span className="block text-[#ecb22e] ">
                  Built for productivity.
                </span>
              </p>
              <div className="main__left__content w-2/4">
                Connect the right people, find anything that you need and
                automate the rest. That’s work in Slack, your productivity
                platform.
              </div>
              <div className="main__left__buttons flex items-center gap-3">
                <button className="uppercase px-8 py-4 rounded-sm bg-white text-[#541554]">
                  sign up with email address
                </button>
                <button className=" uppercase h-10 rounded-sm bg-[#4285f4] text-white">
                  <img
                    className="w-10 bg-white h-10 inline "
                    src={googleLogo}
                    alt=""
                  />
                  <p className="inline-block">sign up with google</p>
                </button>
              </div>
            </div>
          </div>
          <div className="main__right"></div>
        </main>
      </div>
    </>
  );
}

export default App;
