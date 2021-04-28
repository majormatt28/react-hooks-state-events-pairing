import video from "../data/video.js";
import Video from "./Video";
import VideoDetail from "./VideoDetail";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video
        src={video.embedUrl}
        title={video.title}
      />
      <VideoDetail views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
    </div>
  );
}

export default App;
