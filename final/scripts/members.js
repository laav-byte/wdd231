const container = document.getElementById("membersContainer");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

let membersData = [];
let currentView = "list";

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        membersData = await response.json();
        render();
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function render() {
    container.innerHTML = "";

    if (currentView === "grid") {
        renderGrid();
    } else {
        renderList();
    }
}

function renderGrid() {
    container.className = "grid-view";

    membersData.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.photo_url}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Organization Title:</strong> ${member.title}</p>
            <p><strong>Licence:</strong> ${member.license}</p>
            <p><strong>Message:</strong> ${member.message}</p>
        `;

        container.appendChild(card);
    });
}

function renderList() {
    container.className = "list-view";

    const wrapper = document.createElement("div");
    wrapper.classList.add("list-table");

    membersData.forEach(member => {
        const row = document.createElement("div");
        row.classList.add("list-row");

        row.innerHTML = `
            <img src="${member.photo_url}" alt="${member.name}" class="list-img">
            <span>${member.name}</span>
            <span>${member.title}</span>
            <span>${member.license}</span>
            <span>${member.message}</span>
        `;

        wrapper.appendChild(row);
    });

    container.appendChild(wrapper);
}

// TOGGLE
gridBtn.addEventListener("click", () => {
    currentView = "grid";
    render();

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    currentView = "list";
    render();

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

getMembers();