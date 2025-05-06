import "../about/about.css";
import { CONTENT, createElementWithText } from "../../index.js";

export const loadAboutPageContent = () => {
    CONTENT.innerHTML = ""

    const heading = createElementWithText("h1", "About Us");

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-text";
    const aboutText = document.createElement("p");

    aboutText.innerHTML = `
        Welcome to our Sushi Shop! We are passionate about bringing you the freshest and most authentic sushi experience. 
        Our chefs are experts in traditional Japanese cuisine, and we take pride in using only the finest ingredients. 
        Whether you're here for a quick bite or a special occasion, we strive to make every visit memorable. 
        Thank you for choosing us!
    `;

    aboutContainer.appendChild(aboutText);

    CONTENT.append(
        heading,
        aboutContainer
    );
}