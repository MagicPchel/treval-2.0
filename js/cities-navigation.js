const citiesNavitator = document.querySelector(".cities-navigation"); //Объект с навигатором

const citiesNavTag = "a"; //В каком теге находятся названия городов в навигаторе. Теги должны находится на первом уровне дочерности.

const citiesAllString = "Все"; //Строка кнопки показывающей все карточкии
const cityClassPrefix = "cType"; //Префикс класс определяяющего город
const citiesClassNames = { //Соответствие строки города из навигатора и класса фильтруемого блока
    [citiesAllString]: "all",
    "Могилёв": `${cityClassPrefix}Mogilev`,  
    "Минск": `${cityClassPrefix}Minsk`,
    "Брест": `${cityClassPrefix}Brest`,
    "Витебск": `${cityClassPrefix}Vitebsk`,
    "Гомель": `${cityClassPrefix}Gomel`,
    "Гродно": `${cityClassPrefix}Grodno`,
};

const citiesContainer = document.querySelector('.citiesContainer'); //Контенер со всеми карточками в котором карточками являются дочерние блоки
const citiesItems = citiesContainer.children; //Коллекция всех карточек с городами - все дочерние элементы 

const cityDisplay = "block"; //Значение display в отображенном состоянии

function renderFilteredCities(e) { //Функция вызывается при выборе города, осуществляет фильтацию
    const curCity = e.target.innerHTML; //Строка нажатой кнопки
    if (curCity == citiesAllString) { //Вевести все
        for (const item of citiesItems) {
            item.style.display = cityDisplay;
        }
        return;
    }
    for (const item of citiesItems) { //Вовод по выбранному городу
        item.style.display = (item.classList.contains(citiesClassNames[curCity])) ? cityDisplay : "none";
    }
}

// for (let element of citiesNavitator.children) { //добавляет события на кнопки соответствующие тегу citiesNavTag
//     if(element.tagName = citiesNavTag) {
//         element.addEventListener('click', renderFilteredCities);
//     }
// }

// Поддерживает вложенность
for (let element of citiesNavitator.children) { //добавляет события на кнопки соответствующие тегу citiesNavTag
    const item = element.querySelector(citiesNavTag);
    if(item || element.tagName.toUpperCase == citiesNavTag.toUpperCase) {
        element.addEventListener('click', renderFilteredCities);
    }
}