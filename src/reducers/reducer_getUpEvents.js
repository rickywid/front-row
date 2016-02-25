export default function(state=[], action){
	
	switch(action.type){
		case 'GET_UPEVENTS':
			return [action.payload.data.events];
	}

	return state;
}