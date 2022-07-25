import { createRoot } from "react-dom/client"
import { useState } from "react"

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const App = ({anecdotes}) => {

  const [state, setState] = useState(
    {
      points: Array.from(Array(anecdotes.length), ()=>0 ), 
      selected: Math.floor(Math.random()*anecdotes.length),
      mostVoted: null
    }
  )

  const copy = {...state}

  return (
    <>
      <h2>Anecdote of the day</h2>
      {anecdotes[state.selected]}<br/>
      has {state.points[state.selected]} votes<br/>
      <Button onClick = {
        () => {
          copy.points[copy.selected]+=1;
          setState(copy);
          state.mostVoted === null ?
          setState({...copy, mostVoted: copy.selected}) :
          copy.points[copy.mostVoted] < copy.points[copy.selected] ?
            setState({...copy, mostVoted:copy.selected}) :
            setState(copy)
        }} text = {'vote'} />
      <Button onClick = {() => setState({...copy, selected: Math.floor(Math.random()*anecdotes.length)})} text = {'next anecdote'} />
      <h2>Anecdote with most votes</h2>
      {anecdotes[state.mostVoted]||'None'}
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
