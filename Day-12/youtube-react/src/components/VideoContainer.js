import Video from "./Video";

const VideoContainer = (props) => {
    const { videoList } = props;
    return (
        <div className="videos">
            <h1>Recommended</h1>
            <div className="video_container">
            {videoList.map((video, index)=>{
                return <Video key={index} videoId={video.id.videoId} data={video.snippet}/>
            })}
            </div>
        </div>
    )
}

export default VideoContainer;