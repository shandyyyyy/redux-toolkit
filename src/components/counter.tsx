import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { decrement, increment, incrementAmount, reset } from "../store/counter/countSlice"

function Counter(){
  const {count} = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()
  const [amount, setAmount] = useState(0)

  return (
    <div>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
    <p>
      <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
      <button onClick={()=>dispatch(incrementAmount(amount))}>amount</button>
    </p>
   
    </div>
  )
}

export default Counter