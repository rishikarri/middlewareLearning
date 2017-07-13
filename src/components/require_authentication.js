import React, { Component } from 'react';

export default function(ComposedComponent) {
	// ComposedComponenet is what we want to wrap 

	class Authentication extends Component {
		render() {
			return <ComposedComponenet {...this.props}/>
		}
	}

	return Authentication;
}