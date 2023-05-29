import React from 'react';
import Sample2 from './sample2';

const Sample = (props) => {
    console.log(props)
    const data = [{"name":"Karun"}, {"name":"Karthik"},{"name":"Karun"}, {"name":"Karthik"},{"name":"Karun"}, {"name":"Karthik"},{"name":"Karun"}, {"name":"Karthik"}]
    return (
        <div>
            {data.map((value)=>{
                return <h1>{value.name}</h1>
            })}
        </div>
    )
}

export default Sample;