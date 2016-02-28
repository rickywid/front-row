const INITIAL_STATE = { events: [], length: null }

export default function(state=INITIAL_STATE, action){

	switch(action.type){
		case 'GET_INFO':
			return {
				events: action.payload.data.events,
				length: action.payload.data.events.length
			}
	}
	return state;
}