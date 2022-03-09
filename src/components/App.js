import video from "../data/video.js";
import Video from "./Video.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video title={video.title} views={video.views} upvotes={video.upvotes}
      downvotes={video.downvotes} comments={video.comments} createdAt={video.createdAt}
      uri={video.embedUrl}
      />
    </div>
  );
}

export default App;
