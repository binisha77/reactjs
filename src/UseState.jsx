import { useState } from "react"


function UseState(){
  const [count ,setCount] = useState(100)
  const increaseCount = ()=>{
    setCount(100)
  }
  const decrementCount =()=>{

  }
  return(
    <>
    <h1>{count}</h1>
    <button onClick={increaseCount}></button>
    <button onClick={decrementCount}></button>
    </>
  )
}
export default UseState