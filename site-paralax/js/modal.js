const button = document.querySelector("button");

const modal = document.querySelector("dialog");

const buttonclose = document.querySelector("dialog button");

button.onclick = function () {
    modal.showModal();
}

buttonclose.onclick = function () {
    modal.close();
}