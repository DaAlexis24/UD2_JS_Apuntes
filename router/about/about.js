import { createHeader } from "../components/header.js";

export function loadAbout() {
  console.log("Loaded about!!");
  const pageTittle = "About";
  createHeader(pageTittle);
}
