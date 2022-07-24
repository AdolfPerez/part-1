const Statistics = ({collectedData}) => {
  const average = () => ((collectedData.good - collectedData.bad)/(collectedData.all||1))
  const positive = () => (((collectedData.good/(collectedData.all||1))*100) + ' %')
  return (
    <div>
      <p>good {collectedData.good}</p>
      <p>neutral {collectedData.neutral}</p>
      <p>bad {collectedData.bad}</p>
      <p>all {collectedData.all}</p>
      <p>average {average()}</p>
      <p>positive {positive()}</p>
    </div>
  )
}

export default Statistics