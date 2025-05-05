import "../home/home.css";

const CONTENT = document.getElementById("content");

const backgroundImageContainer = document.createElement("div");
backgroundImageContainer.className = "background-image-container"

const heading = document.createElement("h1");
heading.textContent = "Authentic, traditional, sushi";

const text = document.createElement("p");
text.textContent = "Experience the finest sushi crafted with passion and tradition. Join us for an unforgettable culinary journey."

export const loadPageContent = () => {
        document.addEventListener("DOMContentLoaded", () => {
        console.log("dom loaded")
        CONTENT.append(backgroundImageContainer, heading, text)
    })
}