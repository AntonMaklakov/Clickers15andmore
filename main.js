'use strict';
let setting = {
	color: '#22aa22',
	currentFonts: 0,
	fonts: ['Times New Roman', 'Arial', 'monospace']
};

// Saving, loading from storage //
let saveStorage = {
	color: setting.color,
	numberOfClicks:	0,
	pointsPerClick: 1,
	pointsPerMinute: 0,
	totalNumberOfClicks: 0
};

for(let i in saveStorage) {
	let item = sessionStorage.getItem(i);
	if(item) saveStorage[i] = +item||item||saveStorage[i];
};

window.addEventListener('beforeunload', e => {
	for(let i in saveStorage) sessionStorage.setItem(i, saveStorage[i]);
});


let actionHendlersObject = {
	hendlers: {},
	setHendler(action, cb) {
		this.hendlers[action] = cb;
	},
	call(action, data) {
		this.hendlers[action]?.(action, data);
	}
};

function pay(price) {
	if(saveStorage.numberOfClicks >= price) {
		saveStorage.numberOfClicks -= price;
		return true;
	} else {
		showPopUp('Ошибка! Вы должны набрать не менее '+price+' кликов!');
		return false;
	};
};

actionHendlersObject.setHendler('upgrade', (action, data) => {
	let price = +data.price||0;
	if(!pay(price)) return;
	saveStorage.pointsPerClick += price/10;
	updataInfo();
});
actionHendlersObject.setHendler('upgradeMin', (action, data) => {
	let price = +data.price||0;
	if(!pay(price)) return;
	saveStorage.pointsPerMinute += price/10;
	updataInfo();
});


let menuNavigation = {
	current: 'main',
	history: [],
	setMenu(menu) {
		document.querySelector('.menus .menuElement[data-menu='+this.current+']').hidden = true;
		document.querySelector('.menus .menuElement[data-menu='+menu+']').hidden = false;
		
		let prev = this.current;
		
		if(menu !== this.history[this.history.length-1]) this.history.push(this.current);
		else this.history.pop();
		this.current = menu;
		
		this.onchange?.(menu, prev);
	},
	onchange(menu, prev) {
		if(this.history.length) backEl.hidden = false;
		else backEl.hidden = true;
		
		if(menu === 'upgradeMin' && menu === 'upgrade') updataInfo();
	}
};


let menusEl = document.querySelector('.menus');
menusEl.addEventListener('click', e => {
	let data = e.target.dataset;
	if(data.ref) menuNavigation.setMenu(data.ref);
	else if(data.action) actionHendlersObject.call(data.action, data);
});

let backEl = document.querySelector('.back');
backEl.addEventListener('click', function(e) {
	menuNavigation.setMenu(menuNavigation.history[menuNavigation.history.length-1]);
});

// show current menu
document.querySelector('.menus .menuElement[data-menu='+menuNavigation.current+']').hidden = false;


// PopUp //
let popUpEl = document.querySelector('.popup');
let popUpWrapperEl = document.querySelector('.popup-wrapper');
popUpEl.addEventListener('click', e => showPopUp());

function showPopUp(text = '') {
	popUpEl.textContent = text;
	popUpWrapperEl.hidden = !popUpWrapperEl.hidden;
};

// Updata Info (update statistics information) //
let countClickText = document.querySelector('.countClick-text');
let countClickAddText = document.querySelector('.countClickAdd-text');
let clickPerMinuteText = document.querySelector('.clickPerMinute-text');

let statCountText = document.querySelector('.statMenu-text');
let statInfoUpgradesText = document.querySelector('.statMenu-upgradesInfo');
let statInfoUpgradesMinText = document.querySelector('.statMenu-upgradesMinInfo');

updataInfo();
function updataInfo() {
	countClickText.textContent = 'Кликов сделано: '+saveStorage.numberOfClicks;
	countClickAddText.textContent = 'Кликов за нажатие: '+saveStorage.pointsPerClick;
	clickPerMinuteText.textContent = 'Кликов за минуту: '+saveStorage.pointsPerMinute*3;
	
	statCountText.textContent = 'Кликов за все время: '+saveStorage.totalNumberOfClicks;
	statInfoUpgradesText.textContent = 'Апгрейдов на клики: '+saveStorage.pointsPerClick;
	statInfoUpgradesMinText.textContent = 'Апгрейдов на клики в минуту: '+saveStorage.pointsPerMinute;
};

// ColorPicker //
let clickerEl = document.querySelector('.clicker');
clickerEl.style.background = menusEl.style.background = saveStorage.color;
document.querySelector('.colorPicker').addEventListener('input', function(e) {
	saveStorage.color = clickerEl.style.background = menusEl.style.background = this.value;
});

// Fonts (changing)//
document.querySelector('.fontChange').addEventListener('click', e => {
	document.body.style.fontFamily = setting.fonts[setting.currentFonts = ++setting.currentFonts%setting.fonts.length];
});

// adding points - clicks //
document.querySelector('.clickPlusBtn').addEventListener('click', e => {
	saveStorage.totalNumberOfClicks += saveStorage.pointsPerClick;
	saveStorage.numberOfClicks += saveStorage.pointsPerClick;
	updataInfo();
});

setInterval(() => {
	saveStorage.numberOfClicks += saveStorage.pointsPerMinute;
	updataInfo();
}, 20000);