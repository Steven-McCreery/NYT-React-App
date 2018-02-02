import React, { Component } from 'react';
import ReturnedArticle from "./ReturnedArticle.js"


class SecondComponent extends Component {
  render() {
    return (
      <div className="Component-2">
        New Room for Component-2 Content!
        <br />
        {this.props.test}

        <div class="container">
        	<ReturnedArticle test="Wordy Words"/>
    	</div>

      </div>
    );
  }
}

export default SecondComponent;
