import LeftHeader from "./components/ProfileHeader";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import RightBar from "./components/chat/RightBar";

function App() {
  return (
    <div className="App flex flex-row">
      <div className="w-1/3 h-screen border-r-2">
        <LeftHeader/>
        <SearchBar/>
        <Card/>
      </div>

      <div className="w-full h-screen">
        <RightBar/>
      </div>
    </div>
  );
}

export default App;
