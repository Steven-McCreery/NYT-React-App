import React, { Component } from 'react';
// import ReturnedArticle from "./ReturnedArticle.js"   


class ReturnedArticle extends Component {
  render() {
    return (
      <div data-type="ReturnedArticle" class="well" style={{backgroundColor:'lightgreen'}}>
        New Room for Article Content!
        <br />
        {this.props.test}
    	</div>

    );
  }
}

export default ReturnedArticle;
