const dialogBox = document.querySelector("#dialogBox");

const courseCode = document.querySelector("#courseCode");
const courseTitle = document.querySelector("#courseCode");
const courseCredit = document.querySelector("#courseCode");
const courseDescription = document.querySelector("#courseCode");
const courseTechnology = document.querySelector("#courseCode");

const buttons = document.querySelector(".courseBtn");

const coursesDiv = document.querySelector("#courses");

const dialogBox = document.querySelector("#dialogBox");

courses.forEach(course => {

    // CREATE BUTTON
    const button = document.createElement("button");

    button.textContent =
        `${course.subject} ${course.number}`;

    // ADD BUTTON TO DIV
    coursesDiv.appendChild(button);

    // BUTTON CLICK EVENT
    button.addEventListener("click", () => {

        document.querySelector("#courseCode").textContent =
            `${course.subject} ${course.number}`;

        document.querySelector("#courseTitle").textContent =
            course.title;

        document.querySelector("#courseCredit").textContent =
            `Credits: ${course.credits}`;

        document.querySelector("#courseCertificate").textContent =
            `Certificate: ${course.certificate}`;

        document.querySelector("#courseDescription").textContent =
            course.description;

        document.querySelector("#courseTechnology").textContent =
            `Technology: ${course.technology.join(", ")}`;

        // OPEN DIALOG
        dialogBox.showModal();
    });
});

// CLOSE BUTTON
document.querySelector("#closeButton")
    .addEventListener("click", () => {
        dialogBox.close();
    });