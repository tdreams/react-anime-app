import logo from "./logo.svg";
import "./index.css";
import Nav from "./components/Nav";
import TopAnime from "./components/TopAnime";
const App = () => {
  return (
    <>
      <Nav />

      <div className="content">
        <TopAnime />
      </div>
    </>
  );
};
export default App;
