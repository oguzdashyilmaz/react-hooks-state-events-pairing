import video from "../data/video.js";
import Video from "./Video.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video/>
    </div>
  );
}

export default App;
