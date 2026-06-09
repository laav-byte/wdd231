// Timestamp
document.getElementById("timestamp").value =
    new Date().toISOString();

// Open modal
document.querySelectorAll("[data-modal]").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const modal =
            document.getElementById(link.dataset.modal);

        modal.showModal();
    });
});

// Close modal
document.querySelectorAll("dialog button").forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});