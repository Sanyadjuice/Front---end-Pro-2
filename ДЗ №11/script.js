'use strict';
const yearOfBirth = +prompt("Твой год рождения?", )

let country;
let favoriteSport;
let userYears;
let sport;
let year = new Date();
year = year.getFullYear();


if (yearOfBirth !== 0 && isNaN(yearOfBirth) !== true) {
  userYears = (`Твой возраст: ${year - yearOfBirth}`)
} else {
    alert('Жаль, что Вы не захотели ввести свой год рождения')
    userYears = 'Вы не ввели свой возраст'
}

let userCity = prompt("В каком городе ты живешь?", 'Одесса')
if (userCity !== null && isNaN( +userCity )) {
    if ( userCity === "Киев") {
        country = "Ты живешь в столице Украины"
    } else if (userCity === "Москва") {
        country = "Ты живешь в столице росии"
    } else if (userCity === "Минск") {
        country = "Ты живешь в столице беларуси"
    } else {
        country = `Твой город ${userCity}`
    }
} else   {
    alert('Жаль, что Вы не захотели ввести свой город')
    country = 'Вы не ввели свой город'
}

sport = prompt("Твой любимый вид спорта", 'бокс')
if (sport !== null && isNaN( +sport )) {
    if ( sport === "бокс") {
        favoriteSport = "Круто ты хочешь стать Александром Усиком"
    } else if (sport === "футбол") {
        favoriteSport = "Круто ты хочешь стать Криштиану Роналду"
    } else if (sport === "борьба") {
        favoriteSport = "Круто ты хочешь стать Жан Беленюк"
    } else {
        favoriteSport = `Твой город ${sport}`
    }
} else   {
    alert('Жаль, что Вы не захотели ввести свой любимый вид спорта')
    favoriteSport = 'Вы не ввели свой вид спорта'
}

alert(`${userYears} \n${country} \n${favoriteSport}`)

