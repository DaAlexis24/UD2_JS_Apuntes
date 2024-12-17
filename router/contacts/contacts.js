import { createHeader } from "../components/header.js";

export function loadContacts() {
  console.log("Loaded Contacts!!");
  const pageTittle = "Contacts";
  createHeader(pageTittle);
}
