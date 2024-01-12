import React, { useReducer } from 'react'

const initialstate = 0;
const reducer=(state,action)=>{
    if(action.type ==="INCREMENT"){
        return state + 1;
    }
    if(action.type ==="DECREMENT"){
        return state - 1;
    }
    return state;
}
export default function Usereducer() {
   const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <p>{state}</p>
      <div className="btn">
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
      </div>
    </div>
  )
}
