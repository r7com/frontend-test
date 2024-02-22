import { api } from './api.js'
import { sortParticipants } from './lib.js'

const $ = document.querySelector.bind(document)

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const reponse = await api.get("../fazenda.json")
    mountList(reponse);
  } catch (error) {
    console.error("Error ao tentar obter a lista de participantes.")
  }
});

function mountList(list) {
  if (list?.length === 0) return

  const participantsList = $('.participants_list')
  const sortedList = sortParticipants(list)

  for (let i = 0; i < sortedList.length; i++) {
    const { name, picture, description, percentage_positive, percentage_negative } = sortedList[i]

    const textNode = `
        <li class="participants_list_item">
            <div class="participants_list_item_perfil_container">
              <div class="participants_list_item_perfil">
                <img src="${picture}" alt="${name}">
              </div>
              <div class="participants_list_item_perfil_counter">
                ${i + 1}
              </div>
            </div>
            <div class="participants_list_item_info">
              <h2 class="participants_list_item_info_name">${name}</h2>
              <p class="participants_list_item_info_bio">${description}</p>
            </div>
            <div class="participants_status">
                <div class="participants_status_box">
                    <div class="participants_status_header">Gostam</div>
                    <div class="participants_status_body">${percentage_positive?.toFixed(0)}%</div>
                </div>
                <div class="participants_status_box">
                    <div class="participants_status_header">Não Gostam</div>
                    <div class="participants_status_body">${percentage_negative?.toFixed(0)}%</div>
                </div>
            </div>
          </li>
        `
    participantsList.insertAdjacentHTML("beforeend", textNode)
  }
}
