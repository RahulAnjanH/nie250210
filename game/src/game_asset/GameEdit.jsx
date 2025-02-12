function GameEdit(){
    return (
        <>
    <h3><a href="/games/list" class="btn btn-light">Go back</a>Edit the Price of the Game</h3>
    <div class="container">
        <div class=" form-group mb-3">
            <label for="flight number" class="form-label">Id of the Game</label>
            <div class="form-control" id="flight number" >??</div>
        </div>
        <div class=" form-group mb-3">
            <label for="airline name" class="form-label">Name of the game</label>
            <div class="form-control" id="airline name" >??</div>
        </div>
        <div class=" form-group mb-3">
            <label for="flight price" class="form-label">Price of the game</label>
            <input type="text" class="form-control" id="flight price" placeholder="Please enter the price of the Game"/>
        </div>
        <div class=" form-group mb-3">
            <label for="destation" class="form-label">Number of players required </label>
            <div class="form-control" id="destation" >??</div>
        </div>
        <div class=" form-group mb-3">
            <label for="destation" class="form-label">Description of the game</label>
            <div class="form-control" id="destation" >??</div>
        </div>
        <button class="btn btn-warning">Update price</button>
    </div>
        </>
    )
}
export default GameEdit;