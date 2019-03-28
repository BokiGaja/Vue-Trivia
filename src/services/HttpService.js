import axios from 'axios';

const http = axios.create({
   baseURL: 'http://jservice.io/api/'
});


export const ENDPOINTS = {
    TRIVIA_RANDOM: 'random',
    TRIVIA_CATEGORIES: 'categories',
    TRIVIA_CLUES : 'clues'
};

class HttpService {
    get(url, type, numberOfTrivia) {
        return http.get(url+'?'+type+'='+numberOfTrivia)
    }
    getCategory(url) {
        return http.get(url);
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