const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_categories">
                <div className="sidebar_category">
                    <span className="material-icons">
                        home
                    </span>
                    Home
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        local_fire_department
                    </span>
                    Trending
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        subscriptions
                    </span>
                    Subscriptions
                </div>
            </div>
            <hr/>
            <div className="sidebar_categories">
                <div className="sidebar_category">
                    <span className="material-icons">
                        library_add_check
                    </span>
                    Library
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        history
                    </span>
                    History
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        play_arrow
                    </span>
                    Your Videos
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        watch_later
                    </span>
                    Watch Later
                </div>
                <div className="sidebar_category">
                    <span className="material-icons">
                        thumb_up
                    </span>
                    Liked Videos
                </div>
            </div>
        </div>
    )
}

export default Sidebar;