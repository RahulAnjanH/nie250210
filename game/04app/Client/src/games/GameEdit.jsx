import PageHeader from "../header/Pageheader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function GameEdit() {
    const [game, setGame] = useState({ id: '', game_name: '', number_of_players: '', description: '', price: 0 })
    const OnBoxChange = (event) => {
        const newGame= { ...game};
        newGame[event.target.id] = event.target.value;
        setGame(newGame);
    }
    const params = useParams(); // to read the id from url
    const readGameById= async () => {
        //alert(params.id);
        try {
            const baseUrl = 'http://localhost:8080'
            const response = await axios.get(`${baseUrl}/games/${params.id}`);
            setGame(response.data);

        } catch (error) {
            alert('Server Error');
        }
    };
    useEffect(() => { readGameById(); }, []);
    const navigate = useNavigate();
    const OnUpdate = async () => {
        try {
            const baseUrl = 'http://localhost:8080'
            const response = await axios.put(`${baseUrl}/games/${params.id}`, {
                ...game,
                price: parseFloat(game.price)
            });
            alert(response.data.message)
            navigate('/games/list');
        } catch (error) {
            alert('Server Error');
        }
    }
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3><a href="/games/list" className="btn btn-light">Go back</a>Edit the Price of the Game</h3>
            <div className="container">
                <div className=" form-group mb-3">
                    <label htmlFor="Game_name" className="form-label">Name of the Game</label>
                    <div className="form-control" id="Game_name" >{game.game_name}</div>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="number_of_players" className="form-label">Number of players required </label>
                    <div className="form-control" id="number_of_players" >{game.number_of_players}</div>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="description" className="form-label">Description of the game</label>
                    <div className="form-control" id="description" >{game.description}</div>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="price" className="form-label">Price of the game</label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter the price of the Game" value={game.price} onChange={OnBoxChange} /> 
                </div>
                <button className="btn btn-warning"
                    onClick={OnUpdate}>Update Price</button>
            </div>
        </>
    );
}

export default GameEdit;