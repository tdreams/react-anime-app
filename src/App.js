import logo from "./logo.svg";
import "./index.css";
import Nav from "./components/Nav";
import TopAnime from "./components/TopAnime";
import ImageSlider from "./components/ImageSlider";
const App = () => {
  return (
    <>
      <Nav />
      <div className="content">
        <div className="containerStyles">
          <ImageSlider />
        </div>

        <TopAnime />
      </div>
    </>
  );
};
export default App;
