import axios from 'axios';


export function info(query){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?q=${query}&per_page=25&&sort=score.desc&geoip=true`);
  
	return {
		type: 'GET_INFO',
		payload: request2
	}
}


export function upEvents(){
		const request2 = 	axios.all([
			axios.get(`https://api.seatgeek.com/2/events?geoip=true&sort=score.desc&per_page=3&type=concert`),
			]);
  
	return {
		type: 'GET_UPEVENTS',
		payload: request2
	}
}

export function music(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=concert&geoip=true&sort=score.desc`);
  
	return {
		type: 'GET_MUSIC',
		payload: request2
	}
}

export function sports(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=sports&geoip=true&sort=score.desc`);
  
	return {
		type: 'GET_SPORTS',
		payload: request2
	}
}

export function theatre(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=theatre&geoip=true&sort=score.desc`);
  
	return {
		type: 'GET_THEATRE',
		payload: request2
	}
}

export function comedy(){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?type=comedy&geoip=true&sort=score.desc`);
  
	return {
		type: 'GET_COMEDY',
		payload: request2
	}
}
