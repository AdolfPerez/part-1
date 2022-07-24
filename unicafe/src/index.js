import { createRoot } from "react-dom/client"
import { useState } from "react"
import Statistics from './components/Statistics'

const App = () =>  {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <Statistics collectedData={{good, neutral, bad}} />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
