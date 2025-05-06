import "../home/home.css";
import { CONTENT, createElementWithText } from "../../index.js";

export const loadHomePageContent = () => {
    CONTENT.innerHTML = ""
    
    const backgroundImageContainer = document.createElement("div");
    backgroundImageContainer.className = "background-image-container";

    const heading = createElementWithText("h1", "Authentic, traditional, sushi");

    const motoContainer = document.createElement("div");
    const moto = createElementWithText(
        "p",
        "Experience the finest sushi crafted with passion and tradition. Join us for an unforgettable culinary journey.",
        "moto-container"
    );
    motoContainer.appendChild(moto);

    const openingHoursContent = document.createElement("div");
    const openingHours = createElementWithText(
        "p",
        "Opening Hours: Monday - Friday: 11 AM - 10 PM, Saturday - Sunday: 12 PM - 11 PM",
        "opening-hours-container"
    );
    openingHoursContent.appendChild(openingHours);

    const locationContainer = document.createElement("div");
    const location = createElementWithText("p", "Location: 294 lee street, china town", "location-container");
    locationContainer.appendChild(location);

    CONTENT.append(
        backgroundImageContainer,
        heading,
        motoContainer,
        openingHoursContent,
        locationContainer
    );
};