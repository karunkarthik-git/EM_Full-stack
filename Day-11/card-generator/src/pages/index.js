import Card from "./components/card";

const index = () => {
  const colors = ['red', 'blue', 'yellow']
  return(
    <div>
      {colors.map((color)=>{
        return <Card color={color} height="50"/>
      })}
    </div>
  )
}

export default index;