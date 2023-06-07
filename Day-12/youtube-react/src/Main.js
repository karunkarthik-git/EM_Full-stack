import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";

const Main = () => {
    const [list, setList] = useState([]);
    return (
        <div>
            <Header setList={setList}/>
            <Sidebar/>
            <VideoContainer videoList={list} />
        </div>
    )
}

export default Main;