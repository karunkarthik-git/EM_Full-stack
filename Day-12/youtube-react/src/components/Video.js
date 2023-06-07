import { Link } from "react-router-dom";

const Video = (props) => {
    const { data, videoId } = props;
    if(!videoId) return <></>
    return (
        <div className="video">
            <div className="video_thumbnail">
                <img src={data.thumbnails.high.url} alt="channel-logo"/>
            </div>
            <Link to={`/video/${videoId}`}>
            <div className="video_details">
                <div className="author">
                    <img src={"https://yt3.ggpht.com/ytc/AAUvwnhGIymQGp3jRMECbTCBSRAUqi8sKbATpWowQG44CA=s68-c-k-c0x00ffffff-no-rj"} alt="author-img"/>
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
                    <a target="_blank">{data.channelTitle}</a>
                    <span>12.4 M Views . 1 Year ago </span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Video;