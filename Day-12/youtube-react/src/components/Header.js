import { useState, useEffect } from 'react';
import getVideoList from "../apis/youtube-service";

const Header = (props) => {
    const [inputValue, setInputValue] = useState('');
    const getVideos = (searchValue) => {
        getVideoList(searchValue)
        .then((response)=>{
            if (response.status === 200) {
                props.setList(response.data.items)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(()=>{
        getVideos('Edumoon');
    }, [])

    return (
        <div className="header">
            <div className="header_left">
                <span className="material-icons">menu</span>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL9tR5NZx5X5Nb2P6yerlgN0IEvBe1HCu-zprEmrL&s"} alt="youtube-logo" />
            </div>
            <div className="header_search">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <input type="text" placeholder="Search" value={inputValue}
                        onChange={(event)=>{
                            setInputValue(event.target.value)
                        }}
                    />
                    <button onClick={()=> getVideos(inputValue)}>
                        <span className="material-icons">search</span>
                    </button>
                </form>
            </div>
            <div className="header_icons">
                <span className="material-icons">
                    videocam
                </span>
                <span className="material-icons">
                    apps
                </span>
                <span className="material-icons">
                    notifications
                </span>
                <span className="material-icons">
                    account_circle
                </span>
            </div>
        </div>
    )
}

export default Header;

//AIzaSyBvcGZxdgq5zpyeyWjyAXCbXSBkZlM5Yfk