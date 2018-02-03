import React, { Component } from 'react';
import NYTT from "../NYT-T-Logo.png";


class ReturnedArticle extends Component {
  render() {
    return (
      <div data-type="ReturnedArticle" class="well" style={{backgroundColor:'lightgreen', minHeight:"100px"}}>
        <div class="reusableWell">
          <img class='articleIcon pull-left' src={NYTT} style={{width:'50px'}} />
          <span class="insertContent">New Room for Article Content!</span>
          <button class="pull-right button" style={{backgroundColor:'black', color:'white', fontWeight:'bold', outline:'2px outset darkturquoise', borderRadius:'0px', height:'50px'}}>Save Ariticle</button>
          <br />
          {this.props.test}
        </div>
    	</div>

    );
  }
}

export default ReturnedArticle;
