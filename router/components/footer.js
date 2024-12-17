import { render } from "./base.js";
export function createFooter(selector = "body", position = "afterbegin") {
  const template = /*html*/ `
        <footer>
            <address>SAN BLAS F.C.</address>
        </footer>
    `;
  return render(selector, position, template);
}
