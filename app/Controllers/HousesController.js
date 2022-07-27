import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawHouses() {
  // GET THE HOUES TEMPLATE
  let template = ''
  let houses = ProxyState.houses(h => template += h.Template)
  houses.forEach
  document.getElementById('listings').innerHTML = '<p> houses go here </p>'
}



export class HousesController {



  viewHouses() {
    _drawHouses()
    // swap out car form with house form
  }
}