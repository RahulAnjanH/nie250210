function Gamecreate(){
    return (
        <>
    <h3><a href="/games/list" class="btn btn-light">Go back</a>New Game</h3>
    <div class="container">
        <div class=" form-group mb-3">
            <label for="flight number" class="form-label">Id of the Game</label>
            <input type="text" class="form-control" id="flight number" placeholder="Please Enter Game ID"/>
        </div>
        <div class=" form-group mb-3">
            <label for="flight " class="form-label">Name of the Game</label>
            <input type="text" class="form-control" id="flight " placeholder="Please Enter Game Name"/>
        </div>
        <div class=" form-group mb-3">
            <label for="airline name" class="form-label">Price of the Game</label>
            <input type="text" class="form-control" id="airline name" placeholder="Please Enter Price of the Game"/>
        </div>
        <div class=" form-group mb-3">
            <label for="source" class="form-label">Number of players required</label>
            <input type="text" class="form-control" id="source" placeholder="Please Enter Number of players required to play the game"/>
        </div>
        <div class=" form-group mb-3">
            <label for="destation" class="form-label">Description of the game </label>
            <input type="text" class="form-control" id="destation" placeholder="Please Enter Description of the game"/>
        </div>
        <button class="btn btn-success">Add Game</button>
    </div>
        </>

    )
}
export default Gamecreate;