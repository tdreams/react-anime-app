import logo from "./logo.svg";
import "./index.css";
import Nav from "./components/Nav";
import TopAnime from "./components/TopAnime";
const App = () => {
  return (
    <div className="content">
      <Nav />
      <TopAnime />
    </div>
  );
};
export default App;
