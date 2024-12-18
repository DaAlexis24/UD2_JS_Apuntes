import { render } from "../../components/base.js";
import { createCard } from "./card.js";

export function createTaskCards(
  tasks,
  selector = "body",
  position = "afterbegin"
) {
  function deleteCard({ id }) {
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1);
    extendedRender();
  }

  function updateCard(updateTask) {
    const id = updateTask.id;
    const index = updateTask.findIndex((item) => item.id === id);
    tasks[index] = {
      ...tasks[index],
      ...updateTask,
    };
  }

  function addCard(task) {
    task.id = task.id || crypto.randomUUID.splice("-")[0];
    tasks.push(task);
  }

  function extendedRender() {
    //con esto selecciono el elemento
    document.querySelector(selector).innerHTML = "";
    const element = render(selector, position, template);
    tasks.forEach((task) =>
      createCard(task, deleteCard, "ul.cards", "beforeend")
    );
    return element;
  }

  const template = /*html*/ `
    <ul class="cards-container">
    </ul>
  `;

  const element = extendedRender();
  return element;
}
