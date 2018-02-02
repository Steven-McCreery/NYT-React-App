import React, { Component } from 'react';
import ReturnedArticle from "./ReturnedArticle.js"


class SecondComponent extends Component {
  render() {
    return (
      <div data-type="Component-2" style={{backgroundColor:'green', fontWeight:'bold', color:'white'}}>
        New Room for Component-2 Content!
        <br />
        {this.props.test}

        <div class="container" style={{color:'black'}}>
        	<ReturnedArticle test="Wordy Words"/>
    	</div>

      </div>
    );
  }
}

export default SecondComponent;
