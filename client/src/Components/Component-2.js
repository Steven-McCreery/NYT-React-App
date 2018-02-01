import React, { Component } from 'react';


class SecondComponent extends Component {
  render() {
    return (
      <div className="Component-2">
        New Room for Component-2 Content!
        <br />
        {this.props.test}
      </div>
    );
  }
}

export default SecondComponent;
