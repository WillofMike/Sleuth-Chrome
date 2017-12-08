// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// // import DisplayInfo from './DisplayInfo.js'
// import speedTest from './Info.js'
// import Loading from './Loading.js'
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
//       message: '',
//       fetchingData: false
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
//     const response = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/`, {
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
//     speedTest(this.state.packetIndex).then(speed => {
//       if (speed === 0) {
//         this.setState({calculating: false})
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
//       ip: this.state.ip,
//       dl_speed: newTest.speed,
//       name: newTest.isp,
//       lat: newTest.lat,
//       long: newTest.lon
//     }
//     this.addItem(postData);
//     this.setState({testResults: newTest, calculating: false, allSpeeds: newArr, packetIndex: 0})
//   }
//   runTest() {
//     if (this.state.allSpeeds.length < 10) {
//       this.runTheTest()
//     } else if (this.state.allSpeeds.length >= 10) {
//       this.finishTheTest()
//     }
//   }
//   toggleCalculate() {
//     if(this.state.calculating == true) {
//       this.setState({calculating: false})
//     }else{
//       this.setState({calculating: true})
//     }
//   }
//   async componentWillMount() {
//     if (this.state.calculating) {
//       this.runTest();
//     }
//   }
//   async gifDisplay(){
//     this.setState({message: 'line 106'})
//     const response = await  fetch('https://galvanize-cors.herokuapp.com/https://api.giphy.com/v1/gifs/random?api_key=29d4517030f64969a6e4a45aa7fb1fd2&tag=sloth&rating=R')
//     const json = await response.json()
//     console.log(json);
//     this.setState({gif: json.data.image_url})
//   }
//   render() {
//     return (<div className='p-3 mb-2 bg-dark'>
//       <h6>IP address: {this.state.ip}</h6>
//       {this.state.calculating ? this.runTest() : null}
//       {/* <img src={this.gifDisplay.bind(this)}/> */}
//       <Loading gif={this.state.gif}/>
//       <h5>Download Speed: {this.state.testResults.speed}</h5>
//       {/* {this.state.fetchingData ?  : null} */}
//       <button onClick={this.toggleCalculate.bind(this)} type="submit" className="btn btn-primary">Run Sleuth</button>
//       <h6>{this.state.message}</h6>
//     </div>);
//   }
// }
//
// export default App;
