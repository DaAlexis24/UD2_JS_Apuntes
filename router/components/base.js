export function render(selector, position, template) {
  const validPositions = ["afterbegin", "afterend", "beforebegin", "beforeend"];

  if (!validPositions.includes(position)) {
    return;
  }

  const target = document.querySelector(selector);
  target.insertAdjacentHTML(position, template);

  // diccionario de objetos, se deben de priorizar por encima de los IF
  const getElementOptions = {
    beforeend: target.lastElementChild,
    beforebegin: target.previousElementSibling,
    afterbegin: target.firstElementChild,
    afterend: target.nextElementSibling,
  };
  return getElementOptions[position];
}
