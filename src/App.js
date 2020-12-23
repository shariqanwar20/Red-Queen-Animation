import './App.css';
import { CloudAnim } from './Components/CloudAnim';
import { BirdAnim } from './Components/BirdAnim';
import { PlaneAnim } from './Components/PlaneAnim';
import roadImg from "./images/road.jpg";

function App() {
  return (
    <div className="main-div">
      <CloudAnim />
      <BirdAnim />
      <PlaneAnim />
      <br />
      <br />
      <br />
      <div className="runway-div">
          <img src={roadImg} width='1400px' height='150px' alt="runway" />
      </div>
    </div>
  );
}

export default App;
