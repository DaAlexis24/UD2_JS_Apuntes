import { loadPortfolio } from "./portfolio/portfolio.js";
import { loadAbout } from "./about/about.js";
import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createMenu } from "./components/menu.js";
import { loadContacts } from "./contacts/contacts.js";
import { loadTasks } from "./tasks/tasks.js";

function loadIndex() {
  console.log("Loaded main...");

  const menuOptions = [
    { path: "/index.html", label: "Inicio" },
    { path: "/portfolio/portfolio.html", label: "Portfolio" },
    { path: "/contacts/contacts.html", label: "Contacts" },
    { path: "/about/about.html", label: "About" },
    { path: "/tasks/tasks.html", label: "Tareas" },
  ];

  let page = location.pathname.split("/").at(-1).split(".").at(0);

  // aca nos defendemos por si la cadena llega vacía
  // page = "" ? "index" : page;
  // En esta expresión, el operador || solo te permite entrar si page no tiene valor, así se quedará con el valor index
  page = page || "index";

  // switch (page) {
  //   case "portfolio":
  //     loadPortfolio();
  //     break;
  //   case "about":
  //     loadAbout();
  //     break;
  //   case "contacts":
  //     loadContacts();
  //     break;
  //   case "tasks":
  //     loadTasks();
  //   default:
  //     createHeader("");
  // }

  // Le estoy asignando a cada propiedad una función
  const router = {
    portfolio: loadPortfolio,
    about: loadAbout,
    contacts: loadContacts,
    tasks: loadTasks,
    index: createHeader,
  };

  // Ejecutamos el objeto
  router[page]();

  createMenu(menuOptions, "header", "beforeend");
  createFooter("body", "beforeend");
}

loadIndex();
