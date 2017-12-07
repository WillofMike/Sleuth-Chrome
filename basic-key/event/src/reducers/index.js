import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      expectedSpeed: null,
      toggleInputField: false
    };
  }
//
//
//
//   window.setTimeout(getdata() {
//       console.log('background page, line 14', this.state.data);
//       // alert('warning: your IP address will be stored in this extension')
//       // const response = await fetch('https://galvanize-cors-proxy.herokuapp.com/http://httpbin.org/ip')
//       fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/128.177.113.102`)
//       .then( response => {
//       const json = response.json()
//       this.setState({data: json[json.length - 1]})
//       console.log('line 20', this.state.data);
//     })
//   }
// }, 2000)

  // async componentDidMount(){
  //   const responseOne = await fetch('https://galvanize-cors-proxy.herokuapp.com/http://httpbin.org/ip')
  //   const jsonOne = await responseOne.json()
  //   const array = json.origin.split(',')
  //   const responseTwo = await fetch(`https://galvanize-cors-proxy.herokuapp.com/https://infinite-beach-55234.herokuapp.com/tests/${array[0]}`)
  //   const json = await responseTwo.json()
  //   console.log(json);
  //   // const array = json
  //   this.setState({data: json})
  // }
  // window.requestAnimationFrame( () => {
  //   this.componentDidMount()
  // }, 5000)
  // window.setInterval(createItem(item) {
  //   const response = await fetch('https://infinite-beach-55234.herokuapp.com/tests/', {
  //     method: 'POST',
  //     body: JSON.stringify(item),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   this.componentDidMount()
  // }, 5000)

  // submitUsersSpeed(e){
  //   e.preventDefault()
  //   let userInput = e.target.userSpeed.value
  //   this.setState({expectedSpeed: userInput})
  //   this.setState({toggleInputField: true})
  // }

  render() {

    return (
      <div className='p-3 mb-2 bg-dark'>
        {/* <h5>Current IP address: {this.state.data.map(x => x)}</h5> */}
        <h5></h5>
      </div>
    );
  }
}

export default App;
