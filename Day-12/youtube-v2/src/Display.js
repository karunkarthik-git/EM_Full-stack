const Display = (props) => {
    return (
        <div>
            <p>This is a para : {props.value}</p>
            <button onClick={()=>{
                props.handleChildUpdate(0)
            }}>Reset</button>
        </div>
    )
}

export default Display;