import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import VideoContainer from "./components/VideoContainer";

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <VideoContainer>
        {
          [1,2,3,4,5].map((item)=>{
            return <Video/>
          })
        }
      </VideoContainer>
    </div>
  );
}

export default App;
