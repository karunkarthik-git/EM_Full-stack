const Sidebar = () => {
    return (
        <div class="sidebar">
            <div class="sidebar_categories">
                <div class="sidebar_category">
                    <span class="material-icons">
                        home
                    </span>
                    Home
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        local_fire_department
                    </span>
                    Trending
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        subscriptions
                    </span>
                    Subscriptions
                </div>
            </div>
            <hr/>
            <div class="sidebar_categories">
                <div class="sidebar_category">
                    <span class="material-icons">
                        library_add_check
                    </span>
                    Library
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        history
                    </span>
                    History
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        play_arrow
                    </span>
                    Your Videos
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        watch_later
                    </span>
                    Watch Later
                </div>
                <div class="sidebar_category">
                    <span class="material-icons">
                        thumb_up
                    </span>
                    Liked Videos
                </div>
            </div>
        </div>
    )
}

export default Sidebar;