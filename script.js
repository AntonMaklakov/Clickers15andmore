//Объявление переменных
var massiveText = [
	'Здравствуйте,пользователь!',
	'Привет,пользователь!',
	'Добрый день,пользователь!'//Массив приветствий
];
//Helvetica Georgia
var randomNum = Math.floor(Math.random() * 3);
alert(massiveText[randomNum]);//Приветствие вначале кликера!
var shop = document.getElementById('openShop');
var back = document.getElementById('back');
var h1Id = document.getElementById('h1');
var settings = document.getElementById('settings');
var buttonId = document.getElementById('button');
var upgrade1Button = document.getElementById('upgrade1');
var upgrade2Button = document.getElementById('upgrade2');
var upgrade3Button = document.getElementById('upgrade3');
var upgrade4Button = document.getElementById('upgrade4');
var upgrade5Button = document.getElementById('upgrade5');
var settings = document.getElementById('settings');
var backSettings = document.getElementById('backSettings');
var grey = document.getElementById('grey');
var popUp = document.getElementById('popUp');
var popUpClose = document.getElementById('close');
var popUpText = document.getElementById('mistake');
var form = document.getElementById('form');
let massiveGreen = document.getElementsByClassName('green');
var picker = document.getElementById('colorPickerId');
var submitFormPicker = document.getElementById('colorPickerSubmit');
let clickPerMinuteVarriable = document.getElementById('clickPerMinute');
clickPerMinuteUpgradeShop = document.getElementById('shopClickPerMinute');
clickUpgradeShop = document.getElementById('shopClick');
backShop = document.getElementById('backShop');
openAllUpgrades = document.getElementById('openAllUpgrades');
allUpgrades = document.getElementById('allUpgrades');
backAllUpgrades = document.getElementById('backAllUpgrades');
textContentUpgradePerMinute = document.getElementById('textContentUpgradePerMinute');
textContentUpgradePerClick = document.getElementById('textContentUpgradePerClick');
upgradeButtonPerMinute1 = document.getElementById('upgradePerMinute1');
upgradeButtonPerMinute2 = document.getElementById('upgradePerMinute2');
upgradeButtonPerMinute3 = document.getElementById('upgradePerMinute3');
upgradeButtonPerMinute4 = document.getElementById('upgradePerMinute4');
upgradeButtonPerMinute5 = document.getElementById('upgradePerMinute5');
click = document.getElementById('click');
body = document.getElementById('body');
font1 = document.getElementById('font1');
font2 = document.getElementById('font2');
bonus = document.getElementById('bonus');
statClickPerAllTime = document.getElementById('statClickPerAllTime');
statistick = document.getElementById('stat');
allStat = document.getElementById('allStat');
backStatistick = document.getElementById('backStat');
bonusSwitch = false;
function allTimeClick() {//статистика
	allClick = allClick + upgrade0;
	statClickPerAllTime.textContent = 'Кликов за всё время сделано:' + allClick;
}
//Главная динамика кликера
submitFormPicker.addEventListener('click', function (event) {
	event.preventDefault();
	for (var z = 0; z < massiveGreen.length; z++) {                //Главная динамика выбора цвета бэкграунда
		massiveGreen[z].style.backgroundColor = picker.value;
	}
});
//sessionStorage
if (sessionStorage.getItem('allClickVar') != null) {
	var allClick = sessionStorage.getItem('allClickVar');//Вывод из sessionStorеджа инфы о статистике всех кликов
	statClickPerAllTime.textContent = 'Кликов за всё время сделано:' + allClick;
}
else {
	allClick = 0;//Еcли инфы про апгрейды нет
	statClickPerAllTime.textContent = 'Кликов за всё время сделано:' + allClick;
}
if (sessionStorage.getItem('textClickPerMinute') != null) {
	var txtContentClickPerMinute = sessionStorage.getItem('textClickPerMinute');
	textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";//Вывод из sessionStorеджа инфы об
	textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;     //апгрейдах на клики в минуту
}
else {
	var txtContentClickPerMinute = "";//Еcли инфы про апгрейды нет
}
if (sessionStorage.getItem('textClick') != null) {
	var txtContentClick = sessionStorage.getItem('textClick');   //Вывод из sessionStorеджа инфы об
	textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";//апгрейдах на клики
	textContentUpgradePerClick.innerHTML += txtContentClick;
}
else {
	var txtContentClick = "";//Елси инфы про апгрейды нет
}

if (sessionStorage.getItem('count')) {
	var counter = parseInt(sessionStorage.getItem('count'));//Вывод из sessionStorеджа инфы об
	h1Id.textContent = 'Кликов сделано:' + counter;           //общих кликах
}
else {
	var counter = 0;//Елси инфы нет
}
if (sessionStorage.getItem('upgrade')) {
	var upgrade0 = parseInt(sessionStorage.getItem('upgrade'));
	h1Id.textContent = 'Кликов сделано:' + counter;     //Вывод из sessionStorеджа инфы об
	click.textContent = 'Кликов за нажатие:' + upgrade0;//кликах в минуту
}
else {
	var upgrade0 = 1;//Елси инфы нет
}
if (sessionStorage.getItem('upgradePerMinute')) {
	var upgrade1 = parseInt(sessionStorage.getItem('upgradePerMinute'));//Вывод из sessionStorеджа инфы об
	clickPerMinuteVarriable.textContent = 'Кликов в минуту:' + upgrade1;  //кликах в минуту
}
else {
	var upgrade1 = 1;//Елси инфы нет
}

//функции
function clickPerTime() {                                       //Функция кликов в минуту 
	counter = counter + upgrade1;
	allClick = allClick + upgrade1;
	statClickPerAllTime.textContent = 'Кликов за всё время сделано:' + allClick;
	h1Id.textContent = 'Кликов сделано:' + counter;
	sessionStorage.setItem('count', counter);
	sessionStorage.setItem('upgrade', upgrade0);
	sessionStorage.setItem('upgradePerMinute', upgrade1);
	sessionStorage.setItem('allClickVar', allClick);
}
setInterval(clickPerTime, 60000);                               //Сам интервал


popUpClose.addEventListener('click', function () {
	grey.classList.add('hidden');
	popUp.classList.add('hidden');//Попап окно
});
document.addEventListener('keydown', function (event) {
	if (event.keyCode = 13) {
		buttonId.blur();//условие,чтобы нельзя было зажать enter
	}
});
font1.addEventListener('click', function () {
	body.style.fontFamily = '"Times New Roman"';//Привязка события click к кнопки смены шрифта #1
});
font2.addEventListener('click', function () {
	body.style.fontFamily = '"Courier"';//Привязка события click к кнопки смены шрифта #2
});


bonus.addEventListener('click', function () {
	if (1000 > counter) {
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 1000 кликов!';//попап окно если меньше кликов
	}
	else {
		counter = counter - 1000;
		h1Id.textContent = 'Кликов сделано:' + counter;
		alert("Поздравляем!Вы купили бонуску!");//Привязка события click к кнопки покупки 
		//бонуски(попап окно+свич для кликов)
		bonus.parentNode.removeChild(bonus);
		bonusSwitch = true;
	}

});
buttonId.addEventListener('click', function () {
	counter = counter + upgrade0;
	allTimeClick();
	if (bonusSwitch) {
		counter = counter + upgrade0;//свич на бонуску
	}
	h1Id.textContent = 'Кликов сделано:' + counter;
	sessionStorage.setItem('count', counter);
	sessionStorage.setItem('upgrade', upgrade0);
	sessionStorage.setItem('upgradePerMinute', upgrade1);
	sessionStorage.setItem('allClickVar', allClick);
});




//Окно апгрейдов

upgradeButtonPerMinute1.addEventListener('click', function () {
	if (10 > counter) {
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 10 кликов!';//попап окно если меньше кликов
	}
	else {
		counter = counter - 10;//если есть клики,то покупка апгрейда на 1 клик в минуту
		upgrade1 = upgrade1 + 1;
		h1Id.textContent = 'Кликов сделано:' + counter;
		clickPerMinuteVarriable.textContent = 'Кликов в минуту:' + upgrade1;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClickPerMinute += "<span class='upgradesTextColor'>Апргрейд на 1 клик в минуту</span></br>";
		sessionStorage.setItem('textClickPerMinute', txtContentClickPerMinute);
		textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";
		textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;
	}

});
upgradeButtonPerMinute2.addEventListener('click', function () {
	if (20 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 20 кликов!';
	}
	else {
		counter = counter - 20;//если есть клики,то покупка апгрейда на 2 клика в минуту
		upgrade1 = upgrade1 + 2;
		h1Id.textContent = 'Кликов сделано:' + counter;
		clickPerMinuteVarriable.textContent = 'Кликов в минуту:' + upgrade1;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClickPerMinute += "<span class='upgradesTextColor'>Апргрейд на 2 клика в минуту</span></br>";
		sessionStorage.setItem('textClickPerMinute', txtContentClickPerMinute);
		textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";
		textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;

	}

});
upgradeButtonPerMinute3.addEventListener('click', function () {
	if (30 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 30 кликов!';
	}
	else {
		counter = counter - 30;//если есть клики,то покупка апгрейда на 3 клика в минуту
		upgrade1 = upgrade1 + 3;
		h1Id.textContent = 'Кликов сделано:' + counter;
		clickPerMinuteVarriable.textContent = 'Кликов в минуту:' + upgrade1;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClickPerMinute += "<span class='upgradesTextColor'>Апргрейд на 3 клика в минуту</span></br>";
		sessionStorage.setItem('textClickPerMinute', txtContentClickPerMinute);
		textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";
		textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;
	}

});
upgradeButtonPerMinute4.addEventListener('click', function () {
	if (40 > counter) {
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');//попап окно если меньше кликов
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 40 кликов!';
	}
	else {
		counter = counter - 40;//если есть клики,то покупка апгрейда на 4 клика в минуту
		upgrade1 = upgrade1 + 4;
		h1Id.textContent = 'Кликов сделано:' + counter;
		clickPerMinuteVarriable.textContent = 'Кликов в минуту:' + upgrade1;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClickPerMinute += "<span class='upgradesTextColor'>Апргрейд на 4 клика в минуту</span></br>";
		sessionStorage.setItem('textClickPerMinute', txtContentClickPerMinute);
		textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";
		textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;
	}

});
upgradeButtonPerMinute5.addEventListener('click', function () {
	if (50 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 50 кликов!';
	}
	else {
		counter = counter - 50;//если есть клики,то покупка апгрейда на 5 кликов в минуту
		upgrade1 = upgrade1 + 5;
		h1Id.textContent = 'Кликов сделано:' + counter;
		clickPerMinuteVarriable.textContent = 'Кликов в минут:' + upgrade1;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClickPerMinute += "<span class='upgradesTextColor'>Апргрейд на 5 клика в минуту</span></br>";
		sessionStorage.setItem('textClickPerMinute', txtContentClickPerMinute);
		textContentUpgradePerMinute.innerHTML = "Апгрейдов на клики в минуту:";
		textContentUpgradePerMinute.innerHTML += txtContentClickPerMinute;
	}

});

upgrade1Button.addEventListener('click', function () {
	if (10 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 10 кликов!';
	}
	else {
		counter = counter - 10;
		upgrade0 = upgrade0 + 1;//если есть клики,то покупка апгрейда на 1 клик за клик
		h1Id.textContent = 'Кликов сделано:' + counter;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClick += "<span class='upgradesTextColor'>Апргрейд на 1 клик</span></br>";
		sessionStorage.setItem('textClick', txtContentClick);
		click.textContent = 'Кликов за нажатие:' + upgrade0;
		textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";
		textContentUpgradePerClick.innerHTML += txtContentClick;

	}

});
upgrade2Button.addEventListener('click', function () {
	if (20 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 20 кликов!';
	}
	else {
		counter = counter - 20;
		upgrade0 = upgrade0 + 2;//если есть клики,то покупка апгрейда на 2 клика за клик
		h1Id.textContent = 'Кликов сделано:' + counter;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClick += "<span class='upgradesTextColor'>Апргрейд на 2 клика</span></br>";
		sessionStorage.setItem('textClick', txtContentClick);
		click.textContent = 'Кликов за нажатие:' + upgrade0;
		textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";
		textContentUpgradePerClick.innerHTML += txtContentClick;
	}

});
upgrade3Button.addEventListener('click', function () {
	if (30 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 30 кликов!';
	}
	else {
		counter = counter - 30;//если есть клики,то покупка апгрейда на 3 клика за клик
		upgrade0 = upgrade0 + 3;
		h1Id.textContent = 'Кликов сделано:' + counter;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClick += "<span class='upgradesTextColor'>Апргрейд на 3 клика</span></br>";
		sessionStorage.setItem('textClick', txtContentClick);
		click.textContent = 'Кликов за нажатие:' + upgrade0;
		textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";
		textContentUpgradePerClick.innerHTML += txtContentClick;
	}

});
upgrade4Button.addEventListener('click', function () {
	if (40 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 40 кликов!';
	}
	else {
		counter = counter - 40;//если есть клики,то покупка апгрейда на 4 клика за клик
		upgrade0 = upgrade0 + 4;
		h1Id.textContent = 'Кликов сделано:' + counter;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClick += "<span class='upgradesTextColor'>Апргрейд на 4 клика</span></br>";
		sessionStorage.setItem('textClick', txtContentClick);
		click.textContent = 'Кликов за нажатие:' + upgrade0;
		textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";
		textContentUpgradePerClick.innerHTML += txtContentClick;
	}

});
upgrade5Button.addEventListener('click', function () {
	if (50 > counter) {
		popUp.classList.remove('hidden');//попап окно если меньше кликов
		grey.classList.remove('hidden');
		popUpText.textContent = 'Ошибка!Вы должны набрать не менее 50 кликов!';
	}
	else {
		counter = counter - 50;//если есть клики,то покупка апгрейда на 5 кликов за клик
		upgrade0 = upgrade0 + 5;
		h1Id.textContent = 'Кликов сделано:' + counter;
		sessionStorage.setItem('count', counter);
		sessionStorage.setItem('upgrade', upgrade0);
		sessionStorage.setItem('upgradePerMinute', upgrade1);
		txtContentClick += "<span class='upgradesTextColor'>Апргрейд на 5 клика</span></br>";
		sessionStorage.setItem('textClick', txtContentClick);
		click.textContent = 'Кликов за нажатие:' + upgrade0;
		textContentUpgradePerClick.innerHTML = "Апгрейдов на клики:";
		textContentUpgradePerClick.innerHTML += txtContentClick;
	}

});


//Кнопки привязки hidden

settings.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с настройками
	shop.classList.add('hidden');
	openAllUpgrades.classList.add('hidden');
	backSettings.classList.remove('hidden');
	settings.classList.add('hidden');
	form.classList.remove('hidden');
	font1.classList.remove('hidden');
	font2.classList.remove('hidden');
});
backSettings.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с кнопкой назад (настройки)
	shop.classList.remove('hidden');
	backSettings.classList.add('hidden');
	openAllUpgrades.classList.remove('hidden');
	settings.classList.remove('hidden');
	form.classList.add('hidden');
	font1.classList.add('hidden');
	font2.classList.add('hidden');
});
clickUpgradeShop.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с магазином апгрейдов за клики
	upgrade1Button.classList.remove('hidden');
	upgrade2Button.classList.remove('hidden');
	upgrade3Button.classList.remove('hidden');
	upgrade4Button.classList.remove('hidden');
	upgrade5Button.classList.remove('hidden');
	back.classList.add('hidden');
	clickUpgradeShop.classList.add('hidden');
	backShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
	bonus.classList.add('hidden');
});
shop.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с всем магазином
	shop.classList.add('hidden');
	openAllUpgrades.classList.add('hidden');
	back.classList.remove('hidden');
	settings.classList.add('hidden');
	clickUpgradeShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.remove('hidden');
	bonus.classList.remove('hidden');


});
backShop.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с 2 магазинами кликов и кликов в минуту
	back.classList.remove('hidden');
	backShop.classList.add('hidden');
	upgrade1Button.classList.add('hidden');
	upgrade2Button.classList.add('hidden');
	upgrade3Button.classList.add('hidden');
	upgrade4Button.classList.add('hidden');
	upgrade5Button.classList.add('hidden');
	clickUpgradeShop.classList.remove('hidden');
	upgradeButtonPerMinute1.classList.add('hidden');
	upgradeButtonPerMinute2.classList.add('hidden');
	upgradeButtonPerMinute3.classList.add('hidden');
	upgradeButtonPerMinute4.classList.add('hidden');
	upgradeButtonPerMinute5.classList.add('hidden');
	openAllUpgrades.classList.add('hidden');
	clickPerMinuteUpgradeShop.classList.remove('hidden');
	bonus.classList.remove('hidden');
});
back.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным со всем магазином(кнопка назад)
	shop.classList.remove('hidden');
	back.classList.add('hidden');
	upgrade1Button.classList.add('hidden');
	upgrade2Button.classList.add('hidden');
	upgrade3Button.classList.add('hidden');
	upgrade4Button.classList.add('hidden');
	upgrade5Button.classList.add('hidden');
	settings.classList.remove('hidden');
	clickUpgradeShop.classList.add('hidden');
	openAllUpgrades.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
	bonus.classList.add('hidden');
});
clickPerMinuteUpgradeShop.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным с магазином кликов в минуту
	back.classList.add('hidden');
	clickUpgradeShop.classList.add('hidden');
	backShop.classList.remove('hidden');
	upgradeButtonPerMinute1.classList.remove('hidden');
	upgradeButtonPerMinute2.classList.remove('hidden');
	upgradeButtonPerMinute3.classList.remove('hidden');
	upgradeButtonPerMinute4.classList.remove('hidden');
	upgradeButtonPerMinute5.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
	bonus.classList.add('hidden');
});
openAllUpgrades.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным со всеми апгрейдами меню
	openAllUpgrades.classList.add('hidden');
	allUpgrades.classList.remove('hidden');
	settings.classList.add('hidden');
	shop.classList.add('hidden');
	backAllUpgrades.classList.remove('hidden');
});
backAllUpgrades.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным со всеми апгрейдами(назад)
	openAllUpgrades.classList.remove('hidden');
	allUpgrades.classList.add('hidden');
	settings.classList.remove('hidden');
	shop.classList.remove('hidden');
	backAllUpgrades.classList.add('hidden');
});
statistick.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным со статистикой
	shop.classList.add('hidden');
	openAllUpgrades.classList.add('hidden');
	statistick.classList.add('hidden');
	settings.classList.add('hidden');
	backStatistick.classList.remove('hidden');
	allStat.classList.remove('hidden');
});
backStatistick.addEventListener('click', function () {//Убирание и добавление классов hidden к элементам,связанным со статистикой(назад)
	shop.classList.remove('hidden');
	openAllUpgrades.classList.remove('hidden');
	statistick.classList.remove('hidden');
	settings.classList.remove('hidden');
	backStatistick.classList.add('hidden');
	allStat.classList.add('hidden');
});