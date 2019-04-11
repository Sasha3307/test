let menuItem = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	li = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    feedbackClass = document.querySelector('.prompt'),
    feedback;

// поменять местами второй и третий пункт
menu.insertBefore(menuItem[1], menuItem[3]);

// добавление 5 кнопки
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
menu.appendChild(li);// встввляем li в конец элемента menu

// замена фоновой картинки
body.style.backgroundImage = "url('img/apple_true.jpg')";
//body.style.backgroundSize = 'cover';

// Поменять заголовок, добавить слово "подлинную"
title.innerHTML = 'Мы продаем только <strong>подлинную</strong> технику Apple';

// удаление рекламы
//column[1].removeChild(adv);
adv.remove();

// задать вопрос и вывести ответ на страницу
feedback = prompt('Ваше отношение к технике Apple');
feedbackClass.textContent = feedback;