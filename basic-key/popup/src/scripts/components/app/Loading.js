import React, {Component} from 'react';

class Loading extends Component {

  render() {
    return (<div>
      <img className="rounded img-thumbnail" src={this.props.gif}/>
    </div>)
  }
}

export default Loading
