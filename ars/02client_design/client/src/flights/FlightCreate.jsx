import PageHeader from "../header/Pageheader";

function FlightCreate() {
    return (
        <>
            <PageHeader PageNumber={2}/>
            <h3><a href="/flights/list" class="btn btn-light">Go back</a>New Filghts</h3>
            <div className="container">
                <div className=" form-group mb-3">
                    <label htmlFor="flight number" className="form-label">Flight Number</label>
                    <input type="text" className="form-control" id="flight number" placeholder="Please Enter fight number"/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="airline name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline name" placeholder="Please Enter Airline name"/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="Please Enter source name"/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="destation" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destation" placeholder="Please Enter destination name"/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="flight capacity" className="form-label">Capacity(number of seats)</label>
                    <input type="text" className="form-control" id="flight capacity" placeholder="Please Enter fight capacity(number of seats)"/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="flight price" className="form-label">Ticket price</label>
                    <input type="text" className="form-control" id="flight price" placeholder="Please Enter fight ticket price"/>
                </div>
                <button className="btn btn-success">Create flight</button>
            </div>
        </>


    )
}

export default FlightCreate;