import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>;
  
}

const Statistics = (props) => {
  const {good, neutral, bad, all} = props;
  
  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>

            <StatisticsLine text={'good'} value={good} />
            <StatisticsLine text={'neutral'} value={neutral} />
            <StatisticsLine text={'bad'} value={bad} />
            <StatisticsLine text={'all'} value={all} />
            <StatisticsLine text={'average'} value={(good - bad) / all} />
          </tbody>
        </table>
      </>
  )
}
}

const StatisticsLine = (props) => {
  const {text, value} = props;
  return (<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
      </div>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div> 
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        
      </div>
    </div>
  )
}

export default App
