import axios from "axios";
import {JPA_API_URL} from "../Constants";


class portfolioDataService{

    retrievePing(name){
        return axios.get(`${JPA_API_URL}/users/${name}/ping`);
    }

    retrieveAllPortfolio(name){
        return axios.get(`${JPA_API_URL}/users/${name}/portfolio`);
    }

    addAssetPortfolio(name, asset){
        return axios.post(`${JPA_API_URL}/users/${name}/portfolio/`, asset);
    }
}

export default new portfolioDataService()