import { useState } from "react";
import PageHeader from "../header/Pageheader";
import { useNavigate } from "react-router-dom";
import axios  from "axios";
function FlightCreate() {
    const [flight,setFlight] = useState({id:'',number:'',airline_name:'',source:'',destination:'',capacity:0,price:0})
    const OnboxChange=(event)=> {
        const newFlight = {... flight};
        newFlight[event.target.id] = event.target.value;
        setFlight(newFlight);
    }
    const onCreate = async() =>{
            try{
                const baseurl ='http://localhost:8080'; 
                const response = await axios.post(`${baseurl}/flights`,{... flight, capacity:parseInt(flight.capacity),price:parseFloat(flight.price)});
                alert(response.data.message)
                navigate("/flights/list");
            }
            catch{
                alert('Server Error')
            }
    };
    const navigate = useNavigate();
    return (
        <>
            <PageHeader PageNumber={2}/>
            <h3><a href="/flights/list" class="btn btn-light">Go back</a>New Filghts</h3>
            <div className="container">
                <div className=" form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight Number</label>
                    <input type="text" className="form-control" id="number" placeholder="Please Enter fight number" value={flight.number} onChange={OnboxChange}/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="Please Enter Airline name"value={flight.airline_name} onChange={OnboxChange}/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="Please Enter source name"value={flight.source} onChange={OnboxChange}/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="Please Enter destination name"value={flight.destination} onChange={OnboxChange}/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity(number of seats)</label>
                    <input type="text" className="form-control" id="capacity" placeholder="Please Enter fight capacity(number of seats)"value={flight.capacity} onChange={OnboxChange}/>
                </div>
                <div className=" form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket price</label>
                    <input type="text" className="form-control" id="price" placeholder="Please Enter fight ticket price"value={flight.price} onChange={OnboxChange}/>
                </div>
                <button className="btn btn-success" onClick={onCreate}>Create flight</button>
            </div>
        </>
    )
}

export default FlightCreate;