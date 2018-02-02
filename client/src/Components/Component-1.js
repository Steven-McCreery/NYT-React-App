import React, { Component } from 'react';


class FirstComponent extends Component {
	render() {
	    return (
			<div className="Component-1" >

				<form>
					
					<div class="form-group">
						<label for="nytArticles" class="pull-left">Topic to Search:</label>
						<input type="nytArticles" class="form-control" id="nytArticles" />
					</div>

				</form>

			</div>
    	);
  	}
}

export default FirstComponent;
