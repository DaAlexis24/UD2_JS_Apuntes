import { render } from "./base.js";

export function createHeader(
  partialTitle,
  selector = "body",
  position = "afterbegin"
) {
  let finalTitle = "Aprendiendo rutas";
  if (partialTitle) {
    finalTitle += `<br> ${partialTitle}`;
  }

  const template = /*html*/ `
    <header>
      <h1>${finalTitle}</h1>
    </header>
    `;

  return render(selector, position, template);
}