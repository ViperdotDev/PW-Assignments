import final from "./assets/final.webp";
import last from "./assets/last.webp";
import featuresFirst from "./assets/features-first.webp";
import getMore from "./assets/get-more.webp";
import heroImg from "./assets/hero-img.png";
import gmailLogo from "./assets/logo-gmail.png";
import "./App.css";

function App() {
  return (
    <div className="wrapper scroll-smooth ">
      <nav className="flex top-1 sticky bg-transparent text-white backdrop-blur-lg   w-full justify-between items-center px-16 py-1 shadow-md">
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
      <div className="hero flex pt-8 w-full justify-between items-center mb-20">
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
      <div className="features mb-44">
        <div className="features__first hero flex pt-8 w-full justify-between ">
          <div className="features__first__left ml-40 w-1/2 flex flex-col gap-10">
            <h1 className="text-5xl leading-tight font-medium text-slate-900 w-[600px]">
              Email that&apos;s secure, private, and puts you in control.
            </h1>
            <div className="content flex flex-col gap-10 ">
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-all duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  We never use your Gmail content for any ads purposes
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Gmail uses industry-leading encryption for all messages you
                  receive and send. We never use your Gmail content to
                  personalize ads.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  Gmail keeps over a billion people safe every day
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Gmail blocks 99.9% of spam, malware, and dangerous links from
                  ever reaching your inbox.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  The most advanced phishing protections available
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  When a suspicious email arrives that could be legitimate,
                  Gmail lets you know, keeping you in control.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  Best-in-class controls over emails you send
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Confidential Mode lets you set expirations and require
                  recipients to verify by text. You can also remove options to
                  forward, copy, download, and print.
                </p>
              </div>
            </div>
          </div>
          <div className="features__first__right  w-1/2">
            <img
              className="w-[860px] h-[650px] object-cover object-left-top"
              src={featuresFirst}
              alt=""
            />
          </div>
        </div>
        <div className="features__second"></div>
        <div className="features__third"></div>
      </div>
      <section className="get__more__done">
        <div className="first hero flex pt-8 w-full justify-between items-center">
          <div className="first__left  w-1/2">
            <img
              className="w-full h-full object-cover object-left-top"
              src={getMore}
              alt=""
            />
          </div>
          <div className="first__right ml-40 w-1/2 flex flex-col gap-10">
            <h1 className="text-5xl leading-tight font-medium text-slate-900 w-[600px]">
              Get more done with Gmail
            </h1>
            <div className="content flex flex-col gap-10 ">
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-all duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  Stay connected and get organized
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Start a Chat, jump into a video call with Meet, or collaborate
                  in a Doc, all right from Gmail.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  Get more done faster
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Write emails and messages faster with features like Smart
                  Compose to spend more time doing what you love.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-2xl text-gray-600 w-[500px] mb-2">
                  Never forget to reply
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  Gentle nudges help you stay on top of everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gmail__better">
        <div className="first hero flex pt-8 w-full justify-between items-center">
          <div className="first__left ml-40 w-1/2 flex flex-col gap-10">
            <h1 className="text-5xl leading-tight font-medium text-slate-900 w-[600px]">
              Gmail is better on the app
            </h1>
            <div className="content flex flex-col gap-10 ">
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-all duration-500 ease-linear  text-xl text-gray-600 font-medium w-[500px] mb-2">
                  Express yourself with emoji
                </h2>
                <button className="text-green-800 bg-green-200 text-sm rounded-full px-3 tracking-wider mb-2">
                  New
                </button>
                <p className="w-[450px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear mb-3">
                  Emoji reactions are a fast and fun way to reply to emails,
                  only available with the Gmail app.
                </p>
                <p className="text-xs text-gray-500 hover:text-pink-500 transition-all duration-500 ease-linear">
                  This feature will begin to roll out in October 2023.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-colors duration-500 ease-linear  text-xl font-semibold text-gray-600 w-[500px] mb-2">
                  Find your emails faster
                </h2>
                <p className="w-[450px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  A simplified phone IJI displays an email welcoming Helen to
                  the team, and an enlarged emoji bar indicates simplicity in
                  replying with an emoji.
                </p>
              </div>
              <div className=" pl-10 border-l-4 border-l-gray-300 hover:border-l-blue-500 transition-colors duration-500 ease-linear">
                <h2 className="hover:text-blue-500 transition-all font-semibold duration-500 ease-linear  text-xl text-gray-600 w-[500px] mb-2">
                  Switch between accounts
                </h2>
                <p className="w-[500px] text-gray-500 hover:text-emerald-500 transition-all duration-500 ease-linear">
                  All your emails from different providers in one app.
                </p>
              </div>
            </div>
          </div>
          <div className="first__right  w-1/2">
            <img
              className="w-[860px] h-[650px] object-cover object-left-top"
              src={last}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="final mb-4">
        <div className="final__first flex flex-col justify-center items-center gap-5">
          <img className="w-10 h-10" src={gmailLogo} alt="" />
          <h1 className="text-5xl text-center  font-medium w-96">
            Show the world how it’s done.{" "}
          </h1>
          <p className="text-3xl text-gray-500">
            Get started with a more powerful Gmail.{" "}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-500 linear">
            Create an account
          </button>
          <button className="hover:bg-blue-50 px-5 py-2 rounded-md transition-colors duration-500 linear">
            For work
          </button>
        </div>
        <div className="final__second">
          <img src={final} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
