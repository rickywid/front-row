export default function(state=[], action){
	//console.log(action.payload)
	switch(action.type){
		case 'GET_UPEVENTS':
			return action.payload[0].data.meta.geolocation.display_name;
	}

	return state;
}