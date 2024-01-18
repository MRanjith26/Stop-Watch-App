// Write your code here
import './index.css'
import {Component} from 'react'

class StopWatch extends Component {
  state = {timerInSeconds: 0, isTimerRunning: false}

  increaseTimerInSeconds = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  onStartTheTimer = () => {
    this.interValId = setInterval(this.increaseTimerInSeconds, 1000)
    this.setState({isTimerRunning: true})
  }

  onPauseTheTimer = () => {
    clearInterval(this.interValId)
    this.setState({isTimerRunning: false})
  }

  onResetTheTimer = () => {
    clearInterval(this.interValId)
    this.setState({
      timerInSeconds: 0,
      isTimerRunning: false,
    })
  }

  onSetTimerMinAndSec = () => {
    const {timerInSeconds} = this.state

    const Minutes = Math.floor(timerInSeconds / 60)
    const Seconds = Math.floor(timerInSeconds % 60)

    const minutesString = Minutes > 9 ? Minutes : `0${Minutes}`
    const secondsString = Seconds > 9 ? Seconds : `0${Seconds}`

    return `${minutesString}:${secondsString}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-card">
          <div className="header-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch-img"
            />
            <p className="card-heading">Timer</p>
          </div>
          <h1 className="timer-text">{this.onSetTimerMinAndSec()}</h1>
          <div className="button-container">
            <button
              className="btn start"
              type="button"
              onClick={this.onStartTheTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="btn stop"
              type="button"
              onClick={this.onPauseTheTimer}
            >
              Stop
            </button>
            <button
              className="btn reset"
              type="button"
              onClick={this.onResetTheTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
