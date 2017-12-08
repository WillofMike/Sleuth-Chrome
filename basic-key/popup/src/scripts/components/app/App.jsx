import React, {Component} from 'react';
import {connect} from 'react-redux';
import DisplayInfo from './DisplayInfo.js'
import speedTest from './DisplayInfo.js'
import Loading from './Loading.js'

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
      message: '',
      fetchingData: false,
      gif: 'http://static.skaip.org/img/emoticons/180x180/f6fcff/sloth.gif'
    };
  }

  async componentDidMount() {
    let response = await fetch('https://galvanize-cors-proxy.herokuapp.com/http://httpbin.org/ip')
    let json = await response.json()
    let array = json.origin.split(',')
    this.setState({ip: array[0]})
    response = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/${array[0]}`)
    json = await response.json()
    this.setState({data: json[0]})
  }

  async addItem(data) {
    const response = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    this.setState({message: response})
    this.componentDidMount();
  }
  async runTheTest(){
    speedTest(this.state.packetIndex).then(speed => {
      if (speed === 0) {
        this.setState({calculating: false, message: '56: Speed is 0'})
      } else {
        let newSpeeds = [...this.state.allSpeeds];
        newSpeeds.push(Number(speed))
        let newIndex = this.state.packetIndex;
        newIndex++
        this.setState({allSpeeds: newSpeeds, currentSpeed: speed, packetIndex: newIndex})
      }
    })
  }
  finishTheTest(){
    let newTest = this.state.testResults;
    let data = [...this.state.allSpeeds];

    data.sort((a, b) => a - b);
    let lowMiddle = Math.floor((data.length - 1) / 2);
    let highMiddle = Math.ceil((data.length - 1) / 2);
    let median = (data[lowMiddle] + data[highMiddle]) / 2;

    newTest.speed = median.toFixed(2)
    let newArr = [];
    let postData = {
      ip: this.state.ip,
      dl_speed: newTest.speed,
      name: newTest.isp,
      lat: newTest.lat,
      long: newTest.lon
    }
    this.addItem(postData);
    this.setState({testResults: newTest, calculating: false, fetchingData: false, allSpeeds: newArr, packetIndex: 0})
  }
  runTest() {
    if (this.state.allSpeeds.length < 10) {
      this.runTheTest()
    } else if (this.state.allSpeeds.length >= 10) {
      this.finishTheTest()
    }
  }
  toggleCalculate() {
    this.setState({fetchingData: true})
    if(this.state.calculating == true) {
      this.setState({calculating: false})
    }else{
      this.setState({calculating: true})
    }
  }
  async componentWillMount() {
    if (this.state.calculating) {
      this.runTest();
    }
  }
  render() {
    return (<div className='p-3 text-center text-success bg-inverse'>
      <h6>IP Address: <h6 className="text-white">{this.state.ip}</h6></h6>
      {this.state.calculating ? this.runTest() : null}
      <h6>Download Speed: <br/> <h4 className="text-white">{this.state.testResults.speed} mbs</h4></h6>
      {this.state.fetchingData ? <Loading gif={this.state.gif} /> : null}
      <h5></h5>
      <button onClick={this.toggleCalculate.bind(this)} type="submit" className="btn btn-success">Run Sleuth</button>
    </div>);
  }
}

export default App;
