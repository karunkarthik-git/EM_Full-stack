import { createContext, useContext, useRef } from "react";

const ValueContext = createContext();

const Child1 = () => {
  return (
    <div>
      This is child1
      <Child2 />
    </div>
  )
}

const Child2 = () => {
  return (
    <div>
      This is child2
      <Child3 />
    </div>
  )
}

const Child3 = () => {
  return (
    <div>
      This is child3
      <Child4 />
    </div>
  )
}

const Child4 = () => {
  const value = useContext(ValueContext);
  return (
    <div>
      This is child4 & vlaue = {value}
    </div>
  )
}

function Parent() {
  const valueRef = useRef({price:'1000'});
  console.log(valueRef.current)
  return (
    <div className="App">
      <button onClick={()=>{
        valueRef.current = {price: '500'};
        console.log(valueRef.current)
      }}>+</button>
      <p>{valueRef.current.price}</p>
      This is a parent
      <ValueContext.Provider value={"abc"}>
        <Child1/>
      </ValueContext.Provider>
    </div>
  );
}

export default Parent;
