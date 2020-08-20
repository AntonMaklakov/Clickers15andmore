<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Кликер</title>
	<link rel="stylesheet" href="style.css">
</head>
<body id="body">
	<div id="grey" class="hidden"></div>
	<div id="popUp" class="hidden green"><div id="close">X</div><span id="mistake"></span></div>
	<div id="game">
		<div id="upgrade" class="green">
			<button  id="openShop">Открыть магазин</button>
			<button id="bonus" class="hidden">Купить бонуску!(-1000кликов)</button>
			<button  id="openAllUpgrades">Всего апгрейдов!</button>
			<button id="settings">Настройки</button>
			<button id="stat">Статистика</button>
			<div id="allStat" class="hidden">
				<div id="statClickPerAllTime">Кликов за всё время сделано:0</div>
			</div>
			<button id="backStat" class="hidden">Назад</button>
			<button class="hidden" id="shopClick">Просто клики</button>
			<button class="hidden" id="backShop">Назад</button>
			<button class="hidden" id="backSettings">Назад</button>
			<button id="font1" class="hidden">Times New Roman</button>
			<button id="font2" class="hidden">Courier</button>
			<button class="hidden" id="shopClickPerMinute">Клики в минуту</button></br>
			<div id="allUpgrades" class="hidden">
				<div id="textContentUpgradePerMinute">Апгрейдов на клики в минуту:</div>
				<div id="textContentUpgradePerClick">Апгрейдов на клики:</div>
			</div>
			<button id="backAllUpgrades" class="hidden">Назад</button>
			<button class="hidden" id="back">Назад</button>
			<form id="form" class="hidden">
				<label for="colorPicker">Выбрать цвет интерфейса:</label>
				<input type="color" name="colorPicker" id="colorPickerId">
				<input type="submit" id="colorPickerSubmit">
			</form>
			<!--Апгрейды кликов-->
			<button class="hidden" id="upgrade1">Купить апгрейд 1lvl(-10 кликов)(+1клик)</button>
			<button class="hidden" id="upgrade2">Купить апгрейд 2lvl(-20 кликов)(+2клик)</button>
			<button class="hidden" id="upgrade3">Купить апгрейд 3lvl(-30 кликов)(+3клик)</button>
			<button class="hidden" id="upgrade4">Купить апгрейд 4lvl(-40 кликов)(+4клик)</button>
			<button class="hidden" id="upgrade5">Купить апгрейд 5lvl(-50 кликов)(+5клик)</button>
			<!--Апгрейды кликов в минуту-->
			<button class="hidden" id="upgradePerMinute1">Купить кликов в минуту(+1клик)(-10 кликов)</button>
			<button class="hidden" id="upgradePerMinute2">Купить кликов в минуту(+2клик)(-20 кликов)</button>
			<button class="hidden" id="upgradePerMinute3">Купить кликов в минуту(+3клик)(-30 кликов)</button>
			<button class="hidden" id="upgradePerMinute4">Купить кликов в минуту(+4клик)(-40 кликов)</button>
			<button class="hidden" id="upgradePerMinute5">Купить кликов в минуту(+5клик)(-50 кликов)</button>
		</div>
		<div id="clicker" class="green">
			<h1 id="h1">Кликов сделано:0</h1>
			<p id="click">Кликов за нажатие:1</p>
			<p id="clickPerMinute">Кликов в минуту:1</p>
			<button id="button">Click!</button>
		</div>
	</div>
	<script src="script.js"></script>
</div>
</body>
</html>