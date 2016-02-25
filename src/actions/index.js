import axios from 'axios';

const ROOT_URL = "https://api.seatgeek.com/2/";

export function info(query){
		const request2 = 
			axios.all([
    			axios.get(`https://api.seatgeek.com/2/events?q=${query}&per_page=25&&sort=score.desc&geoip=true`),
    			axios.get(`https://api.seatgeek.com/2/events?geoip=true&sort=score.desc&per_page=6`)
  			])

	return {
		type: 'GET_INFO',
		payload: request2
	}
}