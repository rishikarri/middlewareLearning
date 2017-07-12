export default function({ dispatch }){
	return next => action => {
		// if the action does not have a payload or the payload does not have a .then property, we don't care about it, send it on			
		if (!action.payload || !action.payload.then) {
			// we know it is not a promise so we don't care about it, send it onward 
			return next(action);
		}
		// we know we have a promise so we want to dispatch a new action with a succesfully loaded data
		// make sure the action's promise resolves 
		// any function that we pass to .then is only going to be called after the action has been resolved
		action.payload
			.then(function(response){
				// create a new action with teh old type but replace teh promise with the response data 
				const newAction = {...action, payload: response}
				dispatch(newAction);
			})
		
	};	
}

// .then is a promise helper \
// take whatever data our action already contains and extend over it a response
// modify the key value pair to now have the data 
// next forwards action onto the next middleware

// use dispatch to make sure it goes through all of the middleware and then hits the reducer