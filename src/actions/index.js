import axios from 'axios';


export function info(query){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?q=${query}&per_page=25&&sort=datetime_local.asc&geoip=true&client_id=Njg1MjcxMXwxNDg3MTU4MjQ4LjA`);
  
	return {
		type: 'GET_INFO',
		payload: request2
	}
}


export function upEvents(){
		const request2 = 	axios.all([
			axios.get(`https://api.seatgeek.com/2/events?geoip=true&sort=score.desc&per_page=21`),
			]);
  
	return {
		type: 'GET_UPEVENTS',
		payload: request2
	}
}

export function music(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=concert&geoip=true&sort=datetime_local.asc&per_page=25`);
  
	return {
		type: 'GET_MUSIC',
		payload: request2
	}
}

export function sports(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=sports&geoip=true&sort=datetime_local.asc&per_page=25`);
  
	return {
		type: 'GET_SPORTS',
		payload: request2
	}
}

export function comedy(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=comedy&geoip=true&sort=datetime_local.asc&per_page=25`);
  
	return {
		type: 'GET_COMEDY',
		payload: request2
	}
}
