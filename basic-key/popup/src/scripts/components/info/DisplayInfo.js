import React, {Component} from 'react';

class DisplayInfo extends Component {

  render() {
    return (
      <div>
        <h3>50mbs</h3>
        <button onClick={this.props.toggleSubmission.bind(this)}>Edit</button>
      </div>
    );
  }
}

export default DisplayInfo;
