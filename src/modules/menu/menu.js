import "./menu.css";
import { CONTENT, createElementWithText } from "../../index.js";


export const loadMenuPageContent = () => {
    CONTENT.innerHTML = ""

    const heading = createElementWithText("h1", "Menu");

    const menuContainer = document.createElement("div");
    const menu = document.createElement("p")

    menu.innerHTML = `
        <ul>
            <li>Sushi Roll - $12.99</li>
            <li>Salmon Sashimi - $15.99</li>
            <li>Tuna Nigiri - $14.49</li>
            <li>Dragon Roll - $18.99</li>
            <li>Vegetarian Roll - $10.99</li>
            <li>Miso Soup - $4.99</li>
            <li>Green Tea - $2.99</li>
        </ul>
    `;

    CONTENT.append(
        heading,
        menu
    );
}