import { useReducer } from 'react'

type InitialState = {
  count: number
}
type ActionCounter = {
  type: string
  payload: number
}
const initialState = { count: 0 }

function reducer(state: InitialState, action: ActionCounter) {
  const { type, payload } = action
  switch (type) {
    case 'increment':
      return { count: state.count + payload }
    case 'decrement':
      return { count: state.count - payload }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
    </>
  )
}

export default Counter
