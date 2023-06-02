const Header = () => {
    return (
        <div class="header">
            <div class="header_left">
                <span class="material-icons">menu</span>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL9tR5NZx5X5Nb2P6yerlgN0IEvBe1HCu-zprEmrL&s"} alt="youtube-logo" />
            </div>
            <div class="header_search">
                <form>
                    <input type="text" placeholder="Search"/>
                    <button>
                        <span class="material-icons">search</span>
                    </button>
                </form>
            </div>
            <div class="header_icons">
                <span class="material-icons">
                    videocam
                </span>
                <span class="material-icons">
                    apps
                </span>
                <span class="material-icons">
                    notifications
                </span>
                <span class="material-icons">
                    account_circle
                </span>
            </div>
        </div>
    )
}

export default Header;