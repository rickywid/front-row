import axios from 'axios';

const ROOT_URL = "https://api.seatgeek.com/2/";

export function info(query){
		const request2 = axios.get(`https://api.seatgeek.com/2/events?q=${query}&per_page=25&&sort=score.desc&geoip=true`);
  

	return {
		type: 'GET_INFO',
		payload: request2
	}
}


export function upEvents(){
		const request2 = 	axios.get(`https://api.seatgeek.com/2/events?geoip=true&sort=score.desc&per_page=6&geoip=true`);
  

	return {
		type: 'GET_UPEVENTS',
		payload: request2
	}
}
