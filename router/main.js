import { loadPortfolio } from "./portfolio/portfolio.js";
import { loadAbout } from "./about/about.js";
import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createMenu } from "./components/menu.js";
import { loadContacts } from "./contacts/contacts.js";

function loadIndex() {
  console.log("Loaded main...");

  const menuOptions = [
    { path: "/index.html", label: "Inicio" },
    { path: "/portfolio/portfolio.html", label: "Portfolio" },
    { path: "/contacts/contacts.html", label: "Contacts" },
    { path: "/about/about.html", label: "About" },
  ];

  const page = location.pathname.split("/").at(-1).split(".").at(0);
  switch (page) {
    case "portfolio":
      loadPortfolio();
      break;
    case "about":
      loadAbout();
      break;
    case "contacts":
      loadContacts();
      break;
    default:
      createHeader("");
  }
  createMenu(menuOptions, "header", "beforeend");
  createFooter("body", "beforeend");
}

loadIndex();
