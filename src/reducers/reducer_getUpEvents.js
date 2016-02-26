export default function(state=[], action){
	//console.log(action.payload)
	switch(action.type){
		case 'GET_UPEVENTS':
			return [action.payload];
	}

	return state;
}