import "./App.css";
import heroBg from "./assets/hero-image.jpg";
function App() {
  return (
    <>
      <div className="wrapper lg:px-3 lg:w-screen xl:w-[80vw] h-screen ">
        <div className="gallery">
          <h1 className="font-semibold text-xl my-4">Image Gallery</h1>
          <div className="w-full lg:h-[90vh]  xl:h-[480px]  flex gap-2">
            <img
              className="w-1/3  xl:h-auto object-cover object-top"
              src={heroBg}
              alt=""
            />
            <img
              className="w-1/3 object-cover object-top xl:h-auto"
              src={heroBg}
              alt=""
            />
            <img
              className="w-1/3 object-cover object-top xl:h-auto"
              src={heroBg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
