import { FaChartPie } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { SiFiles } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import { TbCheckupList } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper w-full flex h-full">
        <div className="left w-1/5 bg-blue-950 flex flex-col gap-6 p-3 text-white">
          <div className="left-top">
            <h2 className="text-2xl font-semibold underline underline-offset-4 text-center tracking-wider">
              Dashboard
            </h2>
          </div>
          <div className="left-main h-full flex flex-col text-xl font-thin justify-between">
            <div className="main-top flex flex-col gap-5  ">
              <div className="flex gap-3 items-center">
                <FaChartPie className="h-auto w-8" />
                <h1>Dashboard</h1>
              </div>
              <div className="flex gap-3 items-center">
                <BsPeopleFill className="h-auto w-8" />
                <h1>Team</h1>
              </div>
              <div className="flex gap-3 items-center">
                <SiFiles className="h-auto w-8" />
                <h1>Projects</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaRegCalendarAlt className="h-auto w-8" />
                <h1>Calendar</h1>
              </div>
              <div className="flex gap-3 items-center">
                <HiDocumentText className="h-auto w-8" />
                <h1>Documents</h1>
              </div>
              <div className="flex gap-3 items-center">
                <TbCheckupList className="h-auto w-8" />
                <h1>Reports</h1>
              </div>
            </div>
            <div className="main-bottom flex flex-col mb-9 gap-5">
              <p className="font-semibold text-center underline underline-offset-4">
                Your Teams
              </p>
              <div className="flex gap-3 items-center">
                <BsPeopleFill className="h-auto w-8" />
                <h1>PW Skills</h1>
              </div>
              <div className="flex gap-3 items-center">
                <BsPeopleFill className="h-auto w-8" />
                <h1>PW Labs</h1>
              </div>
              <div className="flex gap-3 items-center">
                <BsPeopleFill className="h-auto w-8" />
                <h1>PW - IOI</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-full p-4 bg-gray-200 text-slate-800 h-screen">
          <div className="w-full shadow-lg  h-auto py-4 px-4 rounded-md flex justify-between bg-white">
            <div className="left flex gap-3  items-center">
              <FaUser className="h-auto w-6" />
              <h1 className="font-semibold  text-xl">Profile</h1>
            </div>
            <div className="right flex gap-3 items-center">
              <FaSearch className="h-auto w-6" />
              <FaRegBell className="h-auto w-7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
