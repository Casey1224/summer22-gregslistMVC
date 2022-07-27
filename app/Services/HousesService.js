import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {

    createHouse(newHouse) {
        console.log('Creating a house in service');
        ProxyState.houses = [...ProxyState.houses, new House(newHouse)]
        console.log('current houses', ProxyState.houses);
    }

}

export const housesService = new HousesService()