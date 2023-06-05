const Video = (props) => {
    const { data } = props;
    return (
        <div className="video">
            <div className="video_thumbnail">
                <img src={data.thumbnails.default.url} alt="channel-logo"/>
            </div>
            <div className="video_details">
                <div className="author">
                    <img src={"https://yt3.ggpht.com/ytc/AAUvwnhGIymQGp3jRMECbTCBSRAUqi8sKbATpWowQG44CA=s68-c-k-c0x00ffffff-no-rj"} alt="author-img"/>
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
                    <a href={"https://www.youtube.com/channel/UCmo0ZANU_oN_hWy77Hjuuxg"} target="_blank">{data.channelTitle}</a>
                    <span>12.4 M Views . 1 Year ago </span>
                </div>
            </div>
        </div>
    )
}

export default Video;