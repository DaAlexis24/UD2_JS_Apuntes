import { render } from "../../components/base.js";
export function createAddForm(selector = "body", position = "afterbegin") {
  const template = /*html*/ `
    <details>
      <summary>Añadir tarea</summary>
      <form action="">
        <label>
          <span>Título: </span>
          <input type="text" name="title" required />
        </label>
        <label>
          <span>Responsable: </span>
          <input type="text" name="owner" />
        </label>
        <button type="submit">Crear</button>
      </form>
    </details>
    `;
  return render(selector, position, template);
}
