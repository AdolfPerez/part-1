import { createRoot } from "react-dom/client"
import { useState } from "react"

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const App = ({anecdotes}) => {

  const randomPosition = Math.floor(Math.random()*anecdotes.length)

  const [state, setState] = useState(
    {
      points: Array.from(Array(anecdotes.length), ()=>0 ), 
      selected: randomPosition
    }
  )

  const copy = {...state}

  return (
    <>
      {anecdotes[state.selected]}<br/>
      has {state.points[state.selected]} votes<br/>
      <Button onClick = {
        () => {
          copy.points[copy.selected]+=1
          setState(copy)
        }} text = {'vote'} />
      <Button onClick = {() => setState({...copy, selected: randomPosition})} text = {'next anecdote'} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

createRoot(document.getElementById('root')).render(<App anecdotes={anecdotes} />)
