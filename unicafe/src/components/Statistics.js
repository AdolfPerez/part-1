import Statistic from './Statistic'

const Statistics = ({collectedData}) => {
  const average = () => ((collectedData.good - collectedData.bad)/(collectedData.all||1))
  const positive = () => (((collectedData.good/(collectedData.all||1))*100) + ' %')
  return (
    <div>
      <Statistic text="good" value ={collectedData.good} />
      <Statistic text="neutral" value ={collectedData.neutral} />
      <Statistic text="bad" value ={collectedData.bad} />
      <Statistic text="all" value ={collectedData.all} />
      <Statistic text="average" value ={average()} />
      <Statistic text="positive" value ={positive()} />
    </div>
  )
}

export default Statistics