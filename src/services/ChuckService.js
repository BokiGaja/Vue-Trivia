import { httpService } from "./HttpService";
import { ENDPOINTS } from "./HttpService";

class ChuckService {
  getAll() {
    return httpService.get(ENDPOINTS);
  }

  createMovie(movie) {
    return httpService.post(ENDPOINTS, movie)
  }

  get(id) {
    return httpService.get(ENDPOINTS + id)
  }

  edit(id, body) {
    return httpService.put(ENDPOINTS+'/'+ id, body)
  }

  delete(id) {
    return httpService.delete(ENDPOINTS+'/'+id);
  }
}

export const chuckService = new ChuckService();