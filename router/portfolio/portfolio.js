import { createHeader } from "../components/header.js";

export function loadPortfolio() {
  console.log("Loaded portfolio!!");
  const pageTittle = "Portfolio";
  createHeader(pageTittle);

  const doc = document.documentElement;

  document
    .querySelector(".toggle-switch input")
    .addEventListener("change", (event) => {
      const isDark = event.target.checked;
      console.log("toggle-switch", { isDark });
      doc.dataset.theme = isDark ? "dark" : "light";
    });
}
