import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import VideoContainer from "./components/VideoContainer";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header setList={setList}/>
      <Sidebar/>
      <VideoContainer videoList={list} />
    </div>
  );
}

export default App;
