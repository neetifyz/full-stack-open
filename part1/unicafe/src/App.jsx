import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }
  const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad

    if (all == 0) {
      return (<p>No feedback given</p>)
    }

    return (
      <>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="all" value={(props.good - props.bad) / all} />
          <StatisticLine text="positive" value={100 * props.good / all + " %"} />
        </tbody>
      </table>
      </>
    )
  }

  const Button = (props) => {
    return (<button onClick={props.onClick}>{props.text}</button>)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text={"good"}/>
      <Button onClick={handleNeutralClick} text={"neutral"}/>
      <Button onClick={handleBadClick} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App