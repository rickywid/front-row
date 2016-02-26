export default function(state=[], action){
	
	switch(action.type){
		case 'GET_INFO':
			return [action.payload.data.events];

		case 'GET_MUSIC':
			return [action.payload.data.events];

	}
	return state;
}