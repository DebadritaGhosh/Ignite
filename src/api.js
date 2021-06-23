//Base URL
const key = 'c911f1471f454cd7b56c43a19c8028e7';
const base_url = `https://api.rawg.io/api/games?key=${key}`;
//GAME DETAILS
const withOutKeyBase_url = `https://api.rawg.io/api/games/`;
const gameDetails_key = '?key=c911f1471f454cd7b56c43a19c8028e7';



const getCurrentMonth = () => {

    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {

    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate},&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=30`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS

export const gameDetailsURL = (game_id) => `${withOutKeyBase_url}${game_id}${gameDetails_key}`;

// https://api.rawg.io/api/games/463723?key=c911f1471f454cd7b56c43a19c8028e7

//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) => `${withOutKeyBase_url}${game_id}/screenshots${gameDetails_key}`;

// https://api.rawg.io/api/games/{game_pk}/screenshots

//Searched Game
//Search
const searchBase_url = `https://api.rawg.io/api/games?`;

export const searchGameURL = (game_name) => `${searchBase_url}search=${game_name}&key=${key}&page_size=9`;

//https://api.rawg.io/api/games?search=assassins&key=c911f1471f454cd7b56c43a19c8028e7&page_size=9