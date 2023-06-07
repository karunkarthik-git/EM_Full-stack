const VideoEmbed = (props) => {
    const { id } = props;
    return (
        <div className="videos">
            <div className="video_player">
            <iframe src={`https://www.youtube.com/watch?v=${id}`}  frameborder="0" style={{"overflow":"hidden", "height":'100%', 'width':"100%"}} height={"100%"} width={"100%"}></iframe>
            </div>
        </div>
    )
}

export default VideoEmbed;