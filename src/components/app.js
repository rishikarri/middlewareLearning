import React, { Component } from 'react';
import UserList from './user_list.js';
import { connect } from 'react-redux'; 

class App extends Component {
  render() {
    return (
      <div>
      	<UserList />
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
