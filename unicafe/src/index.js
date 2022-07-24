import { createRoot } from "react-dom/client"
import { useState } from "react"
import Statistics from './components/Statistics'

const App = () =>  {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll ] = useState(0)

  const onClick = (state, setter) => {
    setter(state+1)
    setAll(all+1)
  }

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <button onClick={() => onClick(good, setGood)}>good</button>
        <button onClick={() => onClick(neutral, setNeutral)}>neutral</button>
        <button onClick={() => onClick(bad, setBad)}>bad</button>
      </div>
      <h2>statistics</h2>
        {
          all ?
          <Statistics collectedData={{good, neutral, bad, all}} /> : 
          <p>No feedback given</p>
        }
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
