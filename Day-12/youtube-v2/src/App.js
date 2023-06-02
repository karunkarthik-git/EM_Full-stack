import { useEffect, useState } from "react";
import Display from './Display';

const App = () => {
  const [count, setCount] = useState(100); // initialise a useState

  // useEffect is called when teh component is mounted
  useEffect(()=>{ // acts like a listener -> values in the dependency array
    console.log('App component loaded', count);
    if(count<100){
      // call api-1
    } else {
      // call api-2
    }
    return(()=>{
      //  return is called when teh component is unmounted
      // to make some cleanup actions
      console.log('cleanup')
    })
    // api calls
  }, [count]); // the second argument is an array -> contains the dependencies

  return (
    <div>
      <h1>Counter</h1>
      <h4>Count: {count}</h4>
      <button onClick={()=>{ setCount(count+1)}}>+</button>
      <button onClick={()=>{ setCount(count-1)}}>-</button>
      <Display value={count} handleChildUpdate={
        (childValue) => {
          console.log("childValue ", childValue)
          setCount(childValue)
        }
      }/>
    </div>
  );
}

export default App;


// in return block - default you can use html, incase if you need to use js, use {}