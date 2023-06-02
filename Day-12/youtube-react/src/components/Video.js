const Video = () => {
    return (
        <div class="video">
            <div class="video_thumbnail">
                <img src={"https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CMCouoQG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEAq5h1EpOsDCkz0iqJ3f38fWyWQ"} alt="channel-logo"/>
            </div>
            <div class="video_details">
                <div class="author">
                    <img src={"https://yt3.ggpht.com/ytc/AAUvwnhGIymQGp3jRMECbTCBSRAUqi8sKbATpWowQG44CA=s68-c-k-c0x00ffffff-no-rj"} alt="author-img"/>
                </div>
                <div class="title">
                    <h3>Some random video</h3>
                    <a href={"https://www.youtube.com/channel/UCmo0ZANU_oN_hWy77Hjuuxg"} target="_blank">ABC</a>
                    <span>12.4 M Views . 1 Year ago </span>
                </div>
            </div>
        </div>
    )
}

export default Video;