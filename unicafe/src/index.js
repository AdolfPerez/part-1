import { createRoot } from "react-dom/client"
import { useState } from "react"
import Statistics from './components/Statistics'
import Button from "./components/Button"

const App = () =>  {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClick = (state, setter) => {
    setter(state+1)
  }

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => onClick(good, setGood)}state={'good'} />
        <Button onClick={() => onClick(neutral, setNeutral)}state={'neutral'} />
        <Button onClick={() => onClick(bad, setBad)}state={'bad'} />
      </div>
      <h2>statistics</h2>
        {
          (good+neutral+bad) ?
          <Statistics collectedData={{good, neutral, bad, all: good+neutral+bad}} /> : 
          <p>No feedback given</p>
        }
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
