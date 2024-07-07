const btn_card_01 = document.querySelector('button');

const modal_card_01 = document.querySelector('dialog');

const btn_close_card_01 = document.querySelector('dialog button');

btn_card_01.onclick = function () {
	modal_card_01.showModal();
}

btn_close_card_01.onclick = function () {
	modal_card_01.close();
}

const btn_card_02 = document.getElementById('btn_card_02');

const modal_card_02 = document.getElementById('dialog_02');

const btn_close_card_02 = document.getElementById('btn_close_dialog_02');

btn_card_02.onclick = function () {
	modal_card_02.showModal();
}

btn_close_card_02.onclick = function () {
	modal_card_02.close();
}

const btn_card_03 = document.getElementById('btn_card_03');

const modal_card_03 = document.getElementById('dialog_03');

const btn_close_card_03 = document.getElementById('btn_close_dialog_03');

btn_card_03.onclick = function () {
	modal_card_03.showModal();
}

btn_close_card_03.onclick = function () {
	modal_card_03.close();
}

