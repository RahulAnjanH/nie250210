import { useState } from "react";
import PageHeader from "../header/Pageheader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Gamecreate() {
    const [game, setGame] = useState({ id: '', Game_name: '', number_of_players: '', description: '', price: 0 })
    const OnboxChange = (event) => {
        const newGame= { ...game};
        newGame[event.target.id] = event.target.value;
        setGame(newGame);
    }
    const onCreate = async () => {
        try {
            const baseurl = 'http://localhost:8080';
            const response = await axios.post(`${baseurl}/games`, { ...game,price: parseFloat(game.price) });
            alert(response.data.message)
            navigate("/games/list");
        }
        catch {
            alert('Server Error')
        }
    };
    const navigate = useNavigate();
    return (
        <>
            <PageHeader PageNumber={2} />
            <h3><a href="/games/list" class="btn btn-light">Go back</a>New Game</h3>
            <div className="container">
                <div className=" form-group mb-3">
                    <label htmlFor="Game_name" className="form-label">Name of the Game</label>
                    <input type="text" className="form-control" id="Game_name" placeholder="Please Enter Game Name" value={game.Game_name} onChange={OnboxChange} />
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="price" className="form-label">Price of the Game</label>
                    <input type="text" className="form-control" id="price" placeholder="Please Enter Price of the Game" value={game.price} onChange={OnboxChange} />
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="number_of_players" className="form-label">Number of players required</label>
                    <input type="text" className="form-control" id="number_of_players" placeholder="Please Enter Number of players required to play the game" value={game.number_of_players} onChange={OnboxChange} />
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="description" className="form-label">Description of the game </label>
                    <input type="text" className="form-control" id="description" placeholder="Please Enter Description of the game" value={game.description} onChange={OnboxChange} />
                </div>
                <button className="btn btn-success" onClick={onCreate}>Create Game</button>
            </div>
        </>
    )
}

export default Gamecreate;