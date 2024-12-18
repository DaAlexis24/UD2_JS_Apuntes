import { render } from "../../components/base.js";

export function createCard(
  task,
  deleteCard,
  selector = "body",
  position = "afterbegin"
) {
  const template = /*html*/ `
  <li>
    <div class="card">
      <hgroup title=${task.id}>
        <h3>${task.title}</h3>
        <label for="">
          <input type="checkbox" ${
            task.isDone ? "checked" : ""
          } name="isDone" title="Completada" />
        </label>
      </hgroup>
      <p>Responsable: ${task.owner}</p>
      <p>
        Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis voluptate asperiores ab, esse temporibus rem porro odio
        illo unde repudiandae, ut tenetur labore ad illum minus aperiam
        cum facere consequuntur!
      </p>
      <button>Borrar</button>
    </div>
  </li>
  `;
  const element = render(selector, position, template);
  const button = element.querySelector("button");
  button.addEventListener("click", () => {
    console.log(task);
    deleteCard(task);
  });
  return element;
}
