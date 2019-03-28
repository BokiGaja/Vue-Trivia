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
}

export const httpService = new HttpService();