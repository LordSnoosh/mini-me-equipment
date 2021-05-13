import sendRequest from "./send-request";

const BASE_URL = "https://www.dnd5eapi.co/api";

export function getEquipmentInfo(equipment) {
  return fetch(`${BASE_URL}/equipment/${equipment}/`).then((finalRes) =>
    finalRes.json()
  );
}

export function getAll() {
    return sendRequest(BASE_URL)
}