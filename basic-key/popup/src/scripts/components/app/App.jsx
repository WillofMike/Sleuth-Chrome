import React, {Component} from 'react';
import Info from './info/Info.js'
import DisplayInfo from './info/DisplayInfo.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      data: [],
      expectedSpeed: null,
      toggleInputField: false
    };
  }

  async componentDidMount() {
    const response = await fetch('http://httpbin.org/ip')
    const json = await response.json()

    this.setState({data: json.origin})
  }

  submitUsersSpeed(e){
    e.preventDefault()
    let userData = {
      userInput: e.target.userSpeed.value
    }
  }

  submissionToggle(){
    if(this.state.toggleInputField === false){
      this.setState({toggleInputField:true})
    }else{
      this.setState({toggleInputField:false})
    }
  }

  render() {
    console.log('line 26');
    return (
      <div className='p-3 mb-2 bg-dark'>
        <h4>Current IP: {this.state.data}</h4>
          {this.state.toggleInputField ? <DisplayInfo toggleSubmission={this.submissionToggle.bind(this)}/> : <Info toggleSubmission={this.submissionToggle.bind(this)}/>}
        <h5></h5>
      </div>
    );
  }
}

export default App;
