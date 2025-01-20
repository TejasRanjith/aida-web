import Header from "./components/Header"
import Footer from "./components/Footer";
import Food from "./components/Food";
import Intro from "./components/Intro";
import Para from "./components/Para";
import './App.css';
import Recent from "./components/Recent";
import Chat from "./components/Chat";

function App() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Recent />
        <Chat />
      </div>
    );
}

export default App
