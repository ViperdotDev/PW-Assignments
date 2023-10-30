import "./App.css";
import heroBg from "./assets/hero-image.jpg";
function App() {
  return (
    <>
      <div className="wrapper lg:px-3 lg:w-screen xl:w-[80vw] h-screen ">
        <h1 className="font-semibold text-xl my-4">Image Gallery</h1>
        <div className="w-full sm:h-screen  md:flex-row lg:flex-row xl:flex lg:h-[90vh]  xl:h-[480px] flex-col sm:flex  gap-4 ">
          <img
            className="w-1/3 sm:w-full sm:h-[580px] xl:h-auto object-cover object-top"
            src={heroBg}
            alt=""
          />
          <img
            className="w-1/3 sm:w-full sm:h-[580px] object-cover object-top xl:h-auto"
            src={heroBg}
            alt=""
          />
          <img
            className="w-1/3 sm:w-full sm:h-[700px] object-cover object-top xl:h-auto"
            src={heroBg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
