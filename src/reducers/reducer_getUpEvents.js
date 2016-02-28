const INITIAL_STATE = { geo: "", events: [] }

export default function(state=INITIAL_STATE, action){
	//console.log(action.payload)
	switch(action.type){
		case 'GET_UPEVENTS':
			return {
				geo: action.payload[0].data.meta.geolocation.display_name,
				events: action.payload[0].data.events				
			}
	}

	return state;
}