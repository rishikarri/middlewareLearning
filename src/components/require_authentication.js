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

// In some other location... not in this file...
// We want to use this HOC 
// How do we make use of this thing? 

import Authentication // this is my HOC 
import Resources //this is the component that i want to wrap 

// I now have my higher order component and the component I want to wrap 

const ComposedComponent = Authentication(Resources);

in some render method, write somethings like 

<ComposedComponent  />

// this is the the enhanced componenet

// we use spread operator to pass the props down to teh resources component  