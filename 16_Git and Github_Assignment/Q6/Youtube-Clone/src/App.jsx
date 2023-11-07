import "./App.css";
import hamburger from "./assets/hamburger.png";
import ytLogo from "./assets/Youtube-Logo.png";
import groups from "./assets/Group.svg";
import mic from "./assets/mic.png";
import apps from "./assets/apps.png";
import create from "./assets/create.png";
import notifications from "./assets/notifications.png";
import avatar from "./assets/avatar.png";
import homeFill from "./assets/home-fill.png";
import explore from "./assets/explore.png";
import subscriptions from "./assets/subscriptions.png";
import library from "./assets/library.png";
import history from "./assets/history.png";
import yourVideos from "./assets/yourVideos.png";
import watchLater from "./assets/watchLater.png";
import liked from "./assets/liked.png";
import arrowButton from "./assets/arrowBottom.png";
import premium from "./assets/premium.png";
import gaming from "./assets/gaming.png";
import live from "./assets/live.png";
import sports from "./assets/sports.png";

function App() {
  return (
    <div className="wrapper w-screen h-screen">
      <nav className="w-screen h-14 sticky top-0 flex items-center bg-[#212121] justify-between px-3">
        <div className="left-nav flex items-center gap-3 w-">
          <img src={hamburger} alt="" />
          <img src={ytLogo} alt="" />
        </div>
        <div className="middle-nav w-96 rounded-md h-full p-3 flex">
          <div className="bg-black w-10/12 text-[#AAAAAA] flex p-3 items-center">
            Search
          </div>
          <div className="bg-[#303030] h-full flex p-4 items-center">
            <img src={groups} alt="" />
          </div>
          <div className="h-auto w-10 flex justify-center ml-3 bg-black rounded-full">
            <img src={mic} alt="" className="w-7 p-1 object-cover" />
          </div>
        </div>
        <div className="right-nav w- flex gap-2">
          <img className="w-7 h-auto" src={apps} alt="" />
          <img className="w-7 h-auto" src={create} alt="" />
          <img className="w-7 h-auto" src={notifications} alt="" />
          <img className="w-7 h-auto" src={avatar} alt="" />
        </div>
      </nav>
      <div className="sidebar text-[#FFFFFF] overflow-y-scroll bg-[#212121] leading-none fixed w-1/6 h-full border-t border-t-[#303030] flex flex-col pt-3 px-3">
        <div className="first flex flex-col">
          <div className="flex gap-3 hover:bg-[#303030] transition-colors p-2 items-center">
            <img src={homeFill} alt="" />
            <p>Home</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={explore} alt="" />
            <p>Explore</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={subscriptions} alt="" />
            <p>Subscriptions</p>
          </div>
        </div>
        <div className="second border-t border-t-[#303030] flex flex-col pt-2">
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={library} alt="" />
            <p>Library</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={history} alt="" />
            <p>History</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={yourVideos} alt="" />
            <p>Your Videos</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={watchLater} alt="" />
            <p>Watch Later</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={liked} alt="" />
            <p>Liked Videos</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={arrowButton} alt="" />
            <p>Show More</p>
          </div>
        </div>
        <div className="third flex flex-col border-t border-t-[#303030] pt-2">
          <p className="uppercase p-2 py-4 text-[#AAAAAA] font-semibold">
            Subscriptions
          </p>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698681153184-0715a0fe472b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Alexander Smith</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1681218034100-801ebcbc0221?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Sophia Johnson</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698365039567-907493e623af?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Noah Williams</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698851891315-a2a72eff7156?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Ava Jones</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698778755079-a76db5955d2c?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Liam Brown</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698668768739-7dfa1a00a8f0?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Ethan Miller</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src="https://images.unsplash.com/photo-1698682103687-9f8d811afd23?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Mia Wilson</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img
              src={arrowButton}
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top"
            />
            <p className="">Show 23 more</p>
          </div>
        </div>
        <div className="fourth flex flex-col border-t border-t-[#303030] pt-2">
          <p className="uppercase p-2 py-4 text-[#AAAAAA] font-semibold">
            More from youtube
          </p>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={premium} alt="" />
            <p>Youtube Premium</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={gaming} alt="" />
            <p>Gaming</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={live} alt="" />
            <p>Live</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2">
            <img src={sports} alt="" />
            <p>Sports</p>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#303030] transition-colors p-2 mb-4">
            <img src={sports} alt="" />
            <p>Sports</p>
          </div>
        </div>
      </div>
      <main className="absolute -z-10 top-14 bg-[#212121] overflow-y-scroll right-0 h-screen w-10/12 text-white flex flex-col gap-2">
        <div className="topbar pt-3 h-14 border-t border-t-[#303030] text-white w-screen flex gap-3 items-center ml-6">
          <div className="h-8 flex bg-[#303030] kaatre text-white justify-center items-center w-fit border hover:border-none border-white rounded-r-full rounded-l-full px-5">
            <p>All</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Gaming</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Programming</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Music</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>JavaScript</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Mixes</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Computers</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Algorithms</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Podcasts</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Photography</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Live</p>
          </div>
          <div className="h-8 flex bg-[#303030] text-white justify-center items-center w-fit rounded-r-full rounded-l-full px-5">
            <p>Music</p>
          </div>
        </div>
        <div className="content flex ml-6 flex-wrap w-full h-screen bg-black gap-6 p-4">
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
          <div className="card w-72 h-60 flex flex-col gap-3">
            <div className="card-img w-full h-2/3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="card-content flex justify-center items-center gap-3">
              <div className="card__content__left h-full w-16 self-start">
                <img
                  src="https://images.pexels.com/photos/1821687/pexels-photo-1821687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-9 h-9 rounded-full border-none object-cover object-top"
                />
              </div>
              <div className="card__content__right text-xs tracking-wide">
                <p className="font-semibold mb-2 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-[#AAAAAA] tracking-wide">James Gouse</p>
                <p className="text-[#AAAAAA] tracking-wide">
                  15K Views 1 week ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
