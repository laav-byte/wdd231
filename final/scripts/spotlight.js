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
        member.license === "Professional Electrical Engineer" ||
        member.license === "Registered Electrical Engineer"
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
            <img src="${member.photo_url}"
                 alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.title}</p>

            <p>${member.license}</p>
            <p class="membership-level">
                ${member.license}
            </p>
            <h3>${member.message}</3>

        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();