const VideoContainer = ({children}) => {
    return (
        <div class="videos">
            <h1>Recommened</h1>
            <div class="video_container">
                {children}
            </div>
        </div>
    )
}

export default VideoContainer;