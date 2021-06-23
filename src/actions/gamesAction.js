import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";


//Action
export const loadGames = () => async (dispatch) => {
    //axios
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(upcomingGamesURL());
    const upcomingData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: newGamesData.data.results,
            newGames: upcomingData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {

    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
                 }
            });
}