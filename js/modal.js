const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnOpenn = document.querySelector(".modal-btn-openn");
const modalBtnClose = document.querySelector(".modal-btn-close");


const toggleModal = () => modal.classList.toggle("backdrop__is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnOpenn.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
