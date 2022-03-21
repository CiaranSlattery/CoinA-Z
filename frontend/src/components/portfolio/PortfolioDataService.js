import axios from "axios";
import { JPA_API_URL } from "../../Constants";

class portfolioDataService {
  retrievePing(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/ping`);
  }

  retrieveAllPortfolio(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/portfolio`);
  }

  addAssetPortfolio(name, asset, quantity) {
    return axios.post(`${JPA_API_URL}/users/${name}/portfolio/`, asset, quantity);
  }

  addQuantityPortfolio(name, quantity) {
    return axios.post(`${JPA_API_URL}/users/${name}/quantity/`, quantity);
  }
}

export default new portfolioDataService();
