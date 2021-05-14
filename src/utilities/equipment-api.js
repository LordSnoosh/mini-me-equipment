import sendRequest from "./send-request";

const BASE_URL = "https://www.dnd5eapi.co/api/equipment";

export function getEquipmentInfo(equipment) {
  return fetch(`${BASE_URL}`)
  .then(response => response.json())
  .then(parsedJSON => console.log(parsedJSON.equipment))
  .then((finalRes) => finalRes.json())
  .catch(equipment);
}



export function getAll() {
    return sendRequest(BASE_URL)
}