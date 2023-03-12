import { useEffect, useState } from "react";
import { getAll } from "../../Services/gameServices";
import { LatestGame } from "./LatestGame/LatestGame";

export const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setGames(result)
                console.log(result);
            })
            .catch(err => {
                console.log('error' + err);
            })
    }, []);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {/* Display div: with information about every game (if any) */}
                {games.map(x => <LatestGame game={x} />)}
                {/* Display paragraph: If there is no games  */}
                <p className="no-articles">No games yet</p>
            </div>
        </section>
    );
};