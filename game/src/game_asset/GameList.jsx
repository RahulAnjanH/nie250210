import PageHeader from "../header/PageHeader";

function GameList(){
    return(
    <>
    <PageHeader/>
    <h3>Games</h3>
    <div class="container">
        <table class="table table-success table-striped">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Game Id</th>
                    <th scope="col">Game name </th>
                    <th scope="col">Number of required players</th>
                    <th scope="col">Amount per head</th>
                    <th scope="col"> Description</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Chess</td>
                    <td>2</td>
                    <td>100</td>
                    <td> Chess is an abstract strategy game which involves no hidden information and no elements of chance Typically, the person with the white set of pieces makes the first move.
         Each player must move on their turn and must not put their own king in check.</td>
                    <td><a href="/games/edit/id=1234567" class="btn btn-warning">Edit price</a> </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>carrom</td>
                    <td>4</td>
                    <td>150</td>
                    <td> The objective of the game is to pocket all of your carrom men and the queen before your opponent(s) do. Players take turns to strike their carrom men with the striker, aiming to pocket them into any of the four corner pockets on the board. If a player pockets a carrom man, they get to take another turn, and if they pocket the queen, they must cover it with one of their own carrom men.</td>
                    <td><a href="/games/edit/id=1234567" class="btn btn-warning">Edit price</a> </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
    )
}
export default GameList;