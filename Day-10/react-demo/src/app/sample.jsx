import React from 'react';
import Sample2 from './sample2';

const Sample = (props) => {
    const { data } = props;
    console.log(data)
    return (
        <div>
            {data.map((value)=>{
                return <h1>{value.name}</h1>
            })}
        </div>
    )
}

export default Sample;