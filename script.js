'use strict';
let counterClick = +sessionStorage.getItem('countClicks');
let addCount = +sessionStorage.getItem('addClickCount') + 1;
let addCountMin = +sessionStorage.getItem('addClickMinCount') + 1;
let countAllClick = +sessionStorage.getItem('countAllClick');

window.addEventListener('beforeunload', function (e) {
    sessionStorage.setItem('countClicks', counterClick);
    sessionStorage.setItem('addClickCount', --addCount);
    sessionStorage.setItem('addClickMinCount', --addCountMin);
    sessionStorage.setItem('countAllClick', countAllClick);
});


let menuEl = document.querySelector('.menu');
let clickerEl = document.querySelector('.clicker');

let popUpEl = document.querySelector('.popup');
let popUpWrapperEl = document.querySelector('.popup-wrapper');

function showPopUp(text = '') {
    popUpEl.textContent = text;
    popUpWrapperEl.classList.toggle('hidden');
};
popUpEl.addEventListener('click', function (e) { showPopUp() });


let menuEls = {
    main: document.querySelector('.mainMenu'),
    stat: document.querySelector('.statMenu'),
    settings: document.querySelector('.settingsMenu'),
    shop: document.querySelector('.shopMenu'),
    upgrades: document.querySelector('.upgradesMenu'),
    upgradesMin: document.querySelector('.upgradesMinMenu'),
};

let buttonEls = {
    stat: document.querySelector('.statBtn'),
    settings: document.querySelector('.settingsBtn'),
    shop: document.querySelector('.shopBtn'),
    upgrades: document.querySelector('.upgradesBtn'),
    upgradesMin: document.querySelector('.upgradesMinBtn'),
};


let colorPickerEl = document.querySelector('#colorPicker');
let fontChangeEl = document.querySelector('.fontChange');

colorPickerEl.addEventListener('input', function (e) {
    clickerEl.style.background = colorPickerEl.value;
    menuEl.style.background = colorPickerEl.value;
});

let fontsSelect = 0;
let fonts = [
    'Times New Roman',
    'Arial',
    'monospace'
];

fontChangeEl.addEventListener('click', function (e) {
    document.body.style.fontFamily = fonts[++fontsSelect % fonts.length];
});


let countClickText = document.querySelector('.countClick-text');
let countClickAddText = document.querySelector('.countClickAdd-text');
let clickPerMinuteText = document.querySelector('.clickPerMinute-text');

let statCountText = document.querySelector('.statMenu-text');
let statInfoUpgradesText = document.querySelector('.statMenu-upgradesInfo');
let statInfoUpgradesMinText = document.querySelector('.statMenu-upgradesMinInfo');


let clickPlusBtn = document.querySelector('.clickPlusBtn');
let backBtn = document.querySelector('.back');


clickPlusBtn.addEventListener('click', function (e) {
    countAllClick += addCount;
    counterClick += addCount;
    updataInfo();
});

function updataInfo() {
    countClickText.textContent = 'Кликов сделано: ' + counterClick;
    countClickAddText.textContent = 'Кликов за нажатие: ' + addCount;
    clickPerMinuteText.textContent = 'Кликов за минуту: ' + addCountMin;

    statCountText.textContent = 'Кликов за все время: ' + countAllClick;
    statInfoUpgradesText.textContent = 'Апгрейдов на клики: ' + addCount;
    statInfoUpgradesMinText.textContent = 'Апгрейдов на клики в минуту: ' + addCountMin;
};
updataInfo();


let menuSelect = 'main';
let prevMenus = [];

function setMenu(menu) {
    menuEls[menuSelect].classList.add('hidden');
    menuEls[menu].classList.remove('hidden');

    if (menu != prevMenus[prevMenus.length - 1]) prevMenus.push(menuSelect);
    else prevMenus.pop();

    menuSelect = menu;

    if (prevMenus.length) backBtn.classList.remove('hidden');
    else backBtn.classList.add('hidden');
};


backBtn.addEventListener('click', function (e) { setMenu(prevMenus[prevMenus.length - 1]) });

for (let i in buttonEls) {
    buttonEls[i].addEventListener('click', function () { setMenu(i) });
};


let upgradesBtn = document.querySelectorAll('.upgrade');
let upgradesMinBtn = document.querySelectorAll('.upgradeMin');

for (let i = 0; i < upgradesBtn.length; i++) {
    upgradesBtn[i].addEventListener('click', function (e) {
        let min = (i + 1) * 10;
        if (counterClick >= min) {
            addCount += i + 1;
            counterClick -= min;
            updataInfo();
        } else showPopUp('Ошибка!Вы должны набрать не менее ' + min + ' кликов!');
    });
};

for (let i = 0; i < upgradesMinBtn.length; i++) {
    upgradesMinBtn[i].addEventListener('click', function (e) {
        let min = (i + 1) * 10;
        if (counterClick >= min) {
            addCountMin += i + 1;
            counterClick -= min;
            updataInfo();
        } else showPopUp('Ошибка!Вы должны набрать не менее ' + min + ' кликов!');
    });
};