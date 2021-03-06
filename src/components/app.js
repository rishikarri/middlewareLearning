import React, { Component } from 'react';
import UserList from './user_list.js';
import { connect } from 'react-redux'; 
import Header from './header.js';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	{this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps)(App); 

//this connect function is a higher order component 
// we call connect with some configuration option and whatever gets returned from connect, we invoke again with our component
// we are enhancing or composing our functionality with connect

// connect is a higher order component that is specifically made to make communications with our store 

// provider holds redux store and says hey redux store, whenevery you change i want you tell me 

// new state, i need to go and update any child compnents that we have 

// the provider broadcasts to any chance that it has to anything wrapped by the connect (all containers)


// need to say hey app - if you ever get passed any children, make sure you show them 
// if our app component receives any router children, it is responsible for showing them 