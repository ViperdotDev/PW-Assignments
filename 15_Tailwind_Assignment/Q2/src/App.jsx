import "./App.css";
import heroBg from "./assets/hero-image.jpg";
function App() {
  return (
    <>
      <div className=""> 
        <h1>Image Gallery</h1>
        <img className="hidden" src={heroBg} alt="" />
      </div>
    </>
  );
}

export default App;
