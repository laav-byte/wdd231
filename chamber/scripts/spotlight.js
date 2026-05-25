const spotlightContainer =
    document.querySelector('#spotlight-container');

const membersURL = 'data/members.json';

async function getSpotlights() {

    try {

        const response = await fetch(membersURL);

        if (response.ok) {

            const data = await response.json();

            displaySpotlights(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displaySpotlights(members) {

    // Filter Gold and Silver members
    const qualifiedMembers = members.filter(member =>
        member.level === "Gold" ||
        member.level === "Silver"
    );

    // Shuffle array randomly
    const shuffled =
        qualifiedMembers.sort(() => 0.5 - Math.random());

    // Select 2 or 3 random members
    const selected =
        shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    selected.forEach(member => {

        const card = document.createElement('section');

        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image}"
                 alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.number}</p>
            <p class="membership-level">
                ${member.level} Member
            </p>
            <a href="https://${member.url}"
               target="_blank">
               Visit Website
            </a>


        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();