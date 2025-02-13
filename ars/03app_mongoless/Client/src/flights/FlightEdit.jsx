import PageHeader from "../header/Pageheader";

function FlightEdit(){
    return(
        <>
        <PageHeader PageNumber={1} />
    <h3><a href="/flights/list" className="btn btn-light">Go back</a>edit Filght Ticket price</h3>
    <div className="container">
        <div className=" form-group mb-3">
            <label htmlFor="flight number" className="form-label">Flight Number</label>
            <div className="form-control" id="flight number" >???</div>
        </div>
        <div className=" form-group mb-3">
            <label htmlFor="airline name" className="form-label">Airline name</label>
            <div className="form-control" id="airline name" >???</div>
        </div>
        <div className=" form-group mb-3">
            <label htmlFor="source" className="form-label">Source</label>
            <div className="form-control" id="source" >???</div>
        </div>
        <div className=" form-group mb-3">
            <label htmlFor="destation" className="form-label">Destination</label>
            <div className="form-control" id="destation" >???</div>
        </div>
        <div className=" form-group mb-3">
            <label htmlFor="flight capacity" className="form-label">Flight capacity</label>
            <div className="form-control" id="flight capacity" >???</div>
        </div>
        <div className=" form-group mb-3">
            <label htmlFor="flight price" className="form-label">Flight price</label>
            <input type="text" className="form-control" id="flight price" placeholder="Please enter the fight price"/>
        </div>
        <button className="btn btn-warning">Update price</button>
    </div>
        </>


    )
}

export default FlightEdit;
