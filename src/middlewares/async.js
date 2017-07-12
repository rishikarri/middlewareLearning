export default function({ dispatch }){
	return next => action => {
		// if the action does not have a payload or the payload does not have a .then property, we don't care about it, send it on			
		if (!action.payload || !action.payload.then) {
			// we know it is not a promise so we don't care about it, send it onward 
			return next(action);
		}
		console.log('we dont have a promise', action);
	};	
}

// .then is a promise helper 