import Part from "./Part"

const Content = ({content}) => content.map((cnt, i) => <Part key={i} content={cnt}/>)

export default Content