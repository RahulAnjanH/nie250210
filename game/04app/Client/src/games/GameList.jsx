import { useEffect, useState } from "react";
import PageHeader from "../header/Pageheader";
import axios from "axios";

function GameList() {
    const [games, setGames] = useState([]);
    const readAllGames = async () => {
        try {
            const baseUrl = 'http://localhost:8080'
            const response = await axios.get(`${baseUrl}/games`);
            setGames(response.data);

        } catch (error) {
            alert('Server Error');
        }
    };
    useEffect(() => { readAllGames(); }, []);
    const OnDelete = async (id) => {
        if (!confirm("Are you sure to delete"))
            return;
        try {
            const baseUrl = 'http://localhost:8080'
            const response = await axios.delete(`${baseUrl}/games/${id}`);
            alert(response.data.message)
            readAllGames();
        } catch (error) {
            alert('Server Error');
        }
    }
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>Games</h3>
            <div class="container">
                <table class="table table-success table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Game name </th>
                            <th scope="col">Number of required players</th>
                            <th scope="col"> Description</th>
                            <th scope="col">Amount per head</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => {
                            return (
                                <tr>
                                    <th scope="row">{game.game_name}</th>
                                    <td>{game.number_of_players}</td>
                                    <td>{game.description}</td>
                                    <td>{game.price}</td>
                                    <td><a href={`/games/edit/${game.id}`} className="btn btn-warning">Edit Price</a>
                                        <button className="btn btn-danger" onClick={() => { OnDelete(game.id); }}>Delete </button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GameList;