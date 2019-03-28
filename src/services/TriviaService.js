import {httpService} from "./HttpService";
import {ENDPOINTS} from "./HttpService";

class TriviaService {
  getAll(url, numberOfTrivia) {
    return httpService.get(url, numberOfTrivia);
  }
  create(body) {
    return httpService.post(ENDPOINTS, body)
  }
  get(id) {
    return httpService.get(ENDPOINTS + id)
  }
  edit(id, body) {
    return httpService.put(ENDPOINTS + '/' + id, body)
  }
  delete(id) {
    return httpService.delete(ENDPOINTS + '/' + id);
  }
}

export const triviaService = new TriviaService();