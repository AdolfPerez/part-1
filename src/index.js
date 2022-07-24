import { createRoot } from "react-dom/client"
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content content={[part1, part2, part3]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
