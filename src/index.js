import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async.js';
import { Router, Route, browserHistory } from 'react-router';
import requireAuth from './components/require_authentication.js';
import Resources from './components/resources';

// Rotuer is the top level object - it's what watches the url, whenever the url gets update it tells its child Routes to rerender with some different components 
// browser history - tells the router how the router should keep track of the current url 
//learning middleware in this section



const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<Route path="resources" component={requireAuth(Resources)} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
 
 // require auth is just a function - if we pass a component to that function we get an enhanced component which we can render 