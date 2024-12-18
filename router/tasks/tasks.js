import { createHeader } from "../components/header.js";
import { getTasksFromBackend } from "../services.js";
import { createTaskCards } from "./components/task-card.js";

export function loadTasks() {
  console.log("Loaded Tasks");
  const pageTittle = "Tareas";
  createHeader(pageTittle);
  const tasks = getTasksFromBackend();
  console.log(tasks);
  createTaskCards(tasks, ".cards-container", "beforeend");
}
