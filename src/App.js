import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useOrientation from "./hooks/useOrientation";  // Import the custom hook
import GameSelect from "./components/UI/GameSelect/GameSelect";
import Level from "./components/UI/Level/Level";
import FriendPlay from "./views/FriendPlay";
import GameScene from "./views/GameScene";
import MatchPlay from "./views/MatchPlay";
import Orientation from "./components/UI/Orientation/Orientation";
import Connect from "./components/UI/Connect/Connect";
import Ranking from "./components/UI/Ranking/Ranking";

function App() {
  const orientation = useOrientation();  // Use the custom hook

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GameSelect />} />
          <Route path="/matchPlay" element={<MatchPlay />} />
          <Route path="/friendPlay/*" element={<FriendPlay />} />
          <Route path="/machinePlay" element={<Level />} />
          <Route path="/gameScene" element={<GameScene />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Orientation show={orientation} />
      </div>
    </BrowserRouter>
  );
}

export default App;