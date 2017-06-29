import {
	FETCH_USERS 
} from '../actions/types';

export default function (state = []) {
	switch (action.type) {
		case FETCH_USERS: 
			return [ ...state, ...action.payload ];
	}
	return state;
}