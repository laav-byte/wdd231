import { centers } from "../data/review-centers.mjs";

const showHere = document.querySelector("#showHere");

function displayItems(data) {

    showHere.innerHTML = "";

    data.forEach(center => {

        const card = document.createElement("section");
        card.classList.add("center-card");

        const photo = document.createElement("img");
        photo.src = center.logoUrl;
        photo.alt = center.name;
        photo.loading = "lazy";
        photo.classList.add("logo");

        const title = document.createElement("h2");
        title.textContent = center.name;
        title.classList.add("title");

        const region = document.createElement("p");
        region.innerHTML = `<strong>Base:</strong> ${center.baseRegion}`;
        region.classList.add("region");

        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${center.address}`;
        address.classList.add("address");

        const description = document.createElement("p");
        description.textContent = center.description;
        description.classList.add("description");

        const contact = document.createElement("p");
        contact.innerHTML = `<strong>Contact:</strong> ${center.contactNumber}`;
        contact.classList.add("contact");
        
        card.append(
            photo,
            title,
            region,
            address,
            contact,
            description
        );

        showHere.appendChild(card);
    });
}

displayItems(centers);

const buttons = document.querySelectorAll("#filters button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const region = button.dataset.region;

        if (region === "All") {
            displayItems(centers);
        } else {

            const filtered = centers.filter(center =>
                center.baseRegion === region
            );

            displayItems(filtered);
        }
    });

});