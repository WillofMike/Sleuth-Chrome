import React, {Component} from 'react';
import Info from './info/Info.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
    });
  }

  render() {
    return (
      <div>
        <Info count={this.state.count}/>
      </div>
    );
  }
}

export default App;
