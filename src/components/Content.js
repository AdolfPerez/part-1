import Part from "./Part"

const Content = ({content}) => content.map((part, i) => <Part key={i} part={part}/>)

export default Content