import "./index.css"
import { NAVBUTTONS } from "./modules/header/header.js";
import { loadHomePageContent } from "./modules/home/home.js";
import { loadMenuPageContent } from "./modules/menu/menu.js";
import { loadAboutPageContent } from "./modules/about/about.js";
document.addEventListener("DOMContentLoaded", () => {
    loadHomePageContent();
    navButtonListener();   
});

export const CONTENT = document.getElementById("content");

export const createElementWithText = (tag, text, className = "") => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
};

const navButtonListener = () => {
    NAVBUTTONS.forEach((element) => {
        element.addEventListener("click", () => navBtnClick(element));
    });
};

const navBtnClick = (element) => {
    const id = element.dataset.btn; 
    switch (id) {
        case "home":
            loadHomePageContent();
            break;
        case "menu":
            loadMenuPageContent();
            break;
        case "about":
            loadAboutPageContent();
            break;
        default:
            break;
    }
};