import { createHeader } from "../components/header.js";

export function loadPortfolio() {
  console.log("Loaded portfolio!!");
  const pageTittle = "Portfolio";
  createHeader(pageTittle);
}
