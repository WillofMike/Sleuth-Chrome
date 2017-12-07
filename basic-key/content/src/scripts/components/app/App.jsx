import React, {Component} from 'react';
import {connect} from 'react-redux';
import Info from './Info.js'
import speedTest from './Info.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      expectedSpeed: null,
      toggleInputField: false,
      testResults: {
        IP: '',
        isp: '',
        speed: 0,
        lat: 0,
        lon: 0
      },
      calculating: false,
      allSpeeds: [],
      currentSpeed: 0,
      packetIndex: 0,
      message: ''
    };
  }

  async componentDidMount() {
    let response = await fetch('https://galvanize-cors-proxy.herokuapp.com/http://httpbin.org/ip')
    let json = await response.json()
    let array = json.origin.split(',')
    this.setState({ip: array[0]})
    response = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/${array[0]}`)
    json = await response.json()
    console.log(json[0]);
    this.setState({data: json[0]})
  }

  async addItem(data) {
    this.setState({message: 'Adding this item, bitch'})
    const response = await fetch("https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    this.componentDidMount();
  }

  runTest() {
    if (this.state.allSpeeds.length < 10) {
      speedTest(this.state.packetIndex).then(speed => {
        if (speed === 0) {
          console.log('no internet');
          this.setState({calculating: false})
        } else {
          let newSpeeds = [...this.state.allSpeeds];
          newSpeeds.push(Number(speed))
          let newIndex = this.state.packetIndex;
          newIndex++
          this.setState({allSpeeds: newSpeeds, currentSpeed: speed, packetIndex: newIndex})
        }
      })
    } else if (this.state.allSpeeds.length >= 10) {
      this.setState({message: 'Line 75 ran'});
      let newTest = this.state.testResults;
      let data = [...this.state.allSpeeds];

      data.sort((a, b) => a - b);
      let lowMiddle = Math.floor((data.length - 1) / 2);
      let highMiddle = Math.ceil((data.length - 1) / 2);
      let median = (data[lowMiddle] + data[highMiddle]) / 2;

      newTest.speed = median.toFixed(2)
      let newArr = [];
      let postData = {
        ip: newTest.IP,
        dl_speed: newTest.speed,
        name: newTest.isp,
        lat: newTest.lat,
        long: newTest.lon
      }
      this.addItem(postData);
      this.setState({testResults: newTest, calculating: false, allSpeeds: newArr, packetIndex: 0})
      console.log(newTest);
    }
  }

  calculate(e) {
    e.preventDefault();
    this.setState({calculating: true});
    this.getISP();
  }

  componentWillMount() {
    if (this.calculate) {
      // this.setState({message: 'isCalculating'});
      for (var i = 0; i < 11; i++) {

        this.runTest();
      }
    }
  }

  render() {
    console.log('line 109 All Speeds', this.state.allSpeeds);
    return (<div className='p-3 mb-2 bg-dark'>
      <h5>Current IP address: {this.state.ip}</h5>
      <h5>current speed: {this.state.currentSpeed}</h5>
      <h6>testResults speed: {this.state.testResults.speed}</h6>
      {/* <form onSubmit={this.componentDidMount()}>
        <button onClick={this.calculate.bind(this)} className="btn btn-primary">Run Sleuth</button>
      </form> */}
      <p>message: {this.state.message}</p>
      <p>all speeds: {this.state.allSpeeds.join(':::')}</p>

      {/* <LineChart
        // data={this.data}
        datePattern={'%d-%b-%y %H:%M'}
        // xType={'time'} width={this.state.componentWidth} height={this.state.componentWidth / 2}
        axisLabels={{
          x: 'Hour',
          y: 'Percentage'
        }}
        interpolate={'cardinal'}
        yDomainRange={[0, 100]}
        axes="axes"
        grid="grid"
        style={{
          '.line0' : {
            stroke: 'green'
          }
        }}/> */}
    </div>);
  }
}
// expectedSpeed: null,
// toggleInputField: false,
// testResults: {
//   IP: '',
//   isp: '',
//   speed: 0,
//   lat: 0,
//   lon: 0
// },
// calculating: false,
// allSpeeds: [],
// currentSpeed: 0,
// packetIndex: 0,
// message: '',
export default App;
