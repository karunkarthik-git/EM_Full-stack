import axios from 'axios';

const KEY = 'AIzaSyBvcGZxdgq5zpyeyWjyAXCbXSBkZlM5Yfk';

const getVideoList = (searchQuery) => {
    const options = {
        method: "GET",
        url : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${KEY}`
    }
    return axios.request(options);
}

export default getVideoList;