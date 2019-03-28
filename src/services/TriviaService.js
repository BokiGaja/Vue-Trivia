import {httpService} from "./HttpService";

class TriviaService {
  getAll(url, type, numberOfTrivia) {
    return httpService.get(url, type, numberOfTrivia);
  }
  getSome(category) {
    return httpService.getCategory('clues/?category=' + category);
  }

}

export const triviaService = new TriviaService();