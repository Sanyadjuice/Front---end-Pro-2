'use strict';
const yearOfBirth = +prompt("Твой год рождения?", )


let country = null;
let favoriteSport = null;
let userYears = null;
let today = new Date();
let year = today.getFullYear();



if (yearOfBirth !== 0 && isNaN(yearOfBirth) !== true) {
  userYears = year - yearOfBirth
} else {
    alert('Жаль, что Вы не захотели ввести свой год рождения')
}

let userCity = prompt("В каком городе ты живешь?", 'Одесса')
if (userCity !== null) {
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
}

let sport = prompt("Твой любимый вид спорта", 'бокс')
if (sport !== null) {
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
}

alert(`Твой возраст: ${2022 - yearOfBirth} \n${country} \n${favoriteSport}`)

