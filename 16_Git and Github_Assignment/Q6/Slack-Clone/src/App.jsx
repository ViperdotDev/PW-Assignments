import "./App.css";
import heroVid from "./assets/hero-right-vid.mp4";
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
        <main className="bg-[#541554] flex items-center justify-around text-white font-semibold w-full h-fit py-6 pb-24">
          <div className="main__left w-fit h-fit ml-32 flex  gap-12">
            <div className="main__left__header flex flex-col gap-5">
              <p className="text-6xl block">
                Made for people.
                <span className="block text-[#ecb22e] ">
                  Built for productivity.
                </span>
              </p>
              <div className="main__left__content w-2/4 text-base font-med   tracking-wide">
                Connect the right people, find anything that you need and
                automate the rest. That’s work in Slack, your productivity
                platform.
              </div>
              <div className="main__left__buttons flex items-center gap-3">
                <button className="uppercase px-8 py-4 rounded-sm bg-white text-[#541554]">
                  sign up with email address
                </button>
                <button className=" uppercase h-fit pt-2 pb-2 pl-1  rounded-sm bg-[#4285f4] text-white">
                  <img
                    className="w-10 bg-white h-10 inline "
                    src={googleLogo}
                    alt=""
                  />
                  <p className="inline-block w-48 font-semibold">
                    sign up with google
                  </p>
                </button>
              </div>
              <div className="main__left__bottom flex items-center gap-3">
                <p className="font-semibold tracking-wider text-base">
                  Slack is free to try for as long as you like
                </p>
              </div>
            </div>
          </div>
          <div className="main__right w-fit h-fit ">
            <video
              className="w-[700px] "
              src={heroVid}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
