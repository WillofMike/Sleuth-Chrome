// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import Info from './Info.js'
// import speedTest from './Info.js'
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       data: [],
//       expectedSpeed: null,
//       toggleInputField: false,
//       testResults: {
//         IP: '',
//         isp: '',
//         speed: 0,
//         lat: 0,
//         lon: 0
//       },
//       calculating: false,
//       allSpeeds: [],
//       currentSpeed: 0,
//       packetIndex: 0,
//       message: ''
//     };
//   }
//
//   async componentDidMount() {
//     let response = await fetch('https://galvanize-cors-proxy.herokuapp.com/http://httpbin.org/ip')
//     let json = await response.json()
//     let array = json.origin.split(',')
//     this.setState({ip: array[0]})
//     response = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/${array[0]}`)
//     json = await response.json()
//     this.setState({data: json[0]})
//   }
//
//   async addItem(data) {
//     this.setState({message: 'Adding this item, bitch'})
//     const response = await fetch("https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/", {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     this.componentDidMount();
//   }
//   async runTheTest(){
//     console.log('line 52, runTheTest');
//     speedTest(this.state.packetIndex).then(speed => {
//       if (speed === 0) {
//         this.setState({calculating: false, message: '56: Speed is 0'})
//       } else {
//         let newSpeeds = [...this.state.allSpeeds];
//         newSpeeds.push(Number(speed))
//         let newIndex = this.state.packetIndex;
//         newIndex++
//         this.setState({allSpeeds: newSpeeds, currentSpeed: speed, packetIndex: newIndex})
//       }
//     })
//   }
//   finishTheTest(){
//     this.setState({message: 'Line 65 ran'});
//     let newTest = this.state.testResults;
//     let data = [...this.state.allSpeeds];
//
//     data.sort((a, b) => a - b);
//     let lowMiddle = Math.floor((data.length - 1) / 2);
//     let highMiddle = Math.ceil((data.length - 1) / 2);
//     let median = (data[lowMiddle] + data[highMiddle]) / 2;
//
//     newTest.speed = median.toFixed(2)
//     let newArr = [];
//     let postData = {
//       ip: newTest.IP,
//       dl_speed: newTest.speed,
//       name: newTest.isp,
//       lat: newTest.lat,
//       long: newTest.lon
//     }
//     this.addItem(postData);
//     this.setState({testResults: newTest, calculating: false, allSpeeds: newArr, packetIndex: 0})
//   }
//   runTest() {
//     console.log('line 88, runTest');
//     if (this.state.allSpeeds.length < 10) {
//       this.runTheTest()
//     } else if (this.state.allSpeeds.length >= 10) {
//       this.finishTheTest()
//     }
//   }
//   toggleCalculate() {
//     console.log('line 96, toggle');
//     if(this.state.calculating == true) {
//       this.setState({calculating: false})
//     }else{
//       this.setState({calculating: true})
//     }
//   }
//   // calculate(){
//   //   // this.preventDefault();
//   //   this.setState({calculating: true});
//   //   // this.getISP();
//   // }
//   async componentWillMount() {
//     console.log('line 103, componentWillMount');
//     if (this.state.calculating) {
//       this.runTest();
//     }
//   }
//
//   render() {
//     return (<div className='p-3 mb-2 bg-dark'>
//       <h5>Current IP address: {this.state.ip}</h5>
//       <h5>{this.state.data.dl_speed}</h5>
//       <h6>testResults speed: {this.state.testResults.speed}</h6>
//       <button onClick={this.toggleCalculate.bind(this)} type="submit" className="btn btn-primary">Run Sleuth</button>
//       <p>{this.state.message}</p>
//       <p>all speeds: {this.state.allSpeeds}</p>
//     </div>);
//   }
// }
//
// export default App;
