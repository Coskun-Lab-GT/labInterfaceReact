import React from 'react'
import moment from 'moment';

class Clock extends React.Component{
  constructor() {
    super()
    this.state = {
      time: moment().format('LTS'),
      one: true,
      two: false,
      three: false,
      four: false,
      background: {
        backgroundColor: "white"
      },
      class: ''
    }
    this.clicked = this.clicked.bind(this)
  }
  componentDidMount() {
    setInterval(()=>{
      if(this.state.one == true) {
        this.setState({
          time: moment().format('LTS')
        })
      }
      else if(this.state.four == true){
        this.setState({
          time: moment().format('LT')
        })
      }
    },1000)
  }
  clicked() {
    this.setState({
      background: {
        backgroundColor: "white"
      }
    })
    if(this.state.one == true) {
      this.setState({class: 'faded'})
      setTimeout(()=>{
        this.setState({
          time: moment().format('l'),
          one: false,
          two: true,
          class: ''
        })
      },200)
    }
    else if(this.state.two == true) {
      this.setState({class: 'faded'})
      setTimeout(()=>{
        this.setState({
          time: moment().format('MMMM Do YYYY'),
          two: false,
          three: true,
          class: ''
        })
      },200)
    }
    else if(this.state.three == true) {
      this.setState({class: 'faded'})
      setTimeout(()=>{
        this.setState({
          time: moment().format('LT'),
          three: false,
          four: true,
          class: ''
        })
      },200)
    }
    else if(this.state.four == true) {
      this.setState({class: 'faded'})
      setTimeout(()=>{
        this.setState({
          time: moment().format('LTS'),
          four: false,
          one: true,
          class: ''
        })
      },200)
    }
  }
  render() {
    return(
      <div id="clock" style={this.state.background} onClick={this.clicked}>
        <h1>{moment().format('MMMM Do YYYY')}</h1>
        <h1 className={this.state.class}>{this.state.time}</h1>
      </div>
    )
  }
}

export default Clock;
