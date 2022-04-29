import navbar from "../components/navbar.js";
import { content, fetchRecipe } from "../components/content"
import "../styles/style.css"
const nav = document.getElementById("navbar");
nav.innerHTML = navbar();

const main = document.getElementById("container");
main.innerHTML = content();

fetchRecipe();

