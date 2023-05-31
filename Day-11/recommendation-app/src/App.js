import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
    const [data, setData] = useState();
    console.log(data)
    const getDataFromServer =() => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://currency-exchange.p.rapidapi.com/exchange',
        //     params: {
        //       from: 'INR',
        //       to: 'USD',
        //       q: '100000'
        //     },
        //     headers: {
        //       'X-RapidAPI-Key': '379bfb119emshf19d40bdf9916d1p1054b4jsn17986b7d7952',
        //       'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        //     }
        //   };
        const options = {
            method: "GET",
            url : "https://random-data-api.com/api/v2/users"
        }
        return axios.request(options);
    }

    const getData = () => {
        getDataFromServer()
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            Hello div!
            <button onClick={getData}>Click</button>
            <div><img src={data?.avatar}/></div>
        </div>
    )
}

export default App;