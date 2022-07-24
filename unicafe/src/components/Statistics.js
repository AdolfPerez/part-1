const Statistics = ({collectedData}) =>
<div>
  <h2>statistics</h2>
  <p>good {collectedData.good}</p>
  <p>neutral {collectedData.neutral}</p>
  <p>bad {collectedData.bad}</p>
  <p>all {collectedData.good+collectedData.neutral+collectedData.bad}</p>
  <p>average {(collectedData.good - collectedData.bad)/((collectedData.good + collectedData.neutral + collectedData.bad)||1)}</p>
  <p>positive {((collectedData.good/((collectedData.good + collectedData.neutral + collectedData.bad)||1))*100) + ' %'}</p>
</div>

export default Statistics