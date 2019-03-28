import axios from 'axios';

const http = axios.create({
   baseURL: 'http://jservice.io/api/'
});


export const ENDPOINTS = {
    TRIVIA_RANDOM: 'random'
};

class HttpService {
    get(url, numberOfTrivia) {
        return http.get(url+'?count='+numberOfTrivia)
    }

    post(url, body) {
        return http.post(url, body)
    }

    put(url, body) {
        return http.put(url, body)
    }

    delete(url, id) {
        return http.delete(url, id);
    }
}

export const httpService = new HttpService();