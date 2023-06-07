import { useParams } from 'react-router-dom';
import VideoEmbed from './VideoEmbed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const VideoPlayer = () => {
    const { videoId } = useParams();
    console.log(videoId)
    return (
        <div>
            <Header setList={()=>{}}/>
            <Sidebar/>
            <VideoEmbed id={videoId} />
        </div>
    )
}

export default VideoPlayer;