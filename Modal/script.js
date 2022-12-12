// VARIABLES

const modal = document.querySelector(".modal"),
        btn = document.querySelector(".btn"),
        close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", openModal);

// OPEN MODAL
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// close MODAL
function closeModal() {
    modal.style.display = "none";
}