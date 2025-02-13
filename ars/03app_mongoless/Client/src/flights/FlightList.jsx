import { useEffect, useState } from "react";
import PageHeader from "../header/Pageheader";
import axios from "axios";

function FLightList() {
    const [flights, setFlights] = useState([//state ref element and state functional element(used to set)
    ]);
    const readAllFlights= async() => {
            try{
                const baseurl ="http://localhost:8080"; 
                const response = await axios.get(`${baseurl}/flights`);
                setFlights(response.data);
            }
            catch{
                alert('Server Error')
            }
    };//scoped function ( to convert axios call from async to sync)
    useEffect(()=> {readAllFlights(); } ,[])
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List Of Flights</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Flight Number </th>
                            <th scope="col">Airline name </th>
                            <th scope="col">Source</th>
                            <th scope="col">destination</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight) => {
                            return (
                                <tr>
                                    <th scope="row">{flight.number}</th>
                                    <td>{flight.airline_name}</td>
                                    <td>{flight.source}</td>
                                    <td>{flight.destination}</td>
                                    <td><a href={`/flights/edit/${flight.id}`} className="btn btn-warning">Edit Price</a>
                                        <button className="btn btn-danger">Delete </button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FLightList;