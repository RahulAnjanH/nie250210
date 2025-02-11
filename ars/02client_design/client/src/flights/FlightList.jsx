import PageHeader from "../header/Pageheader";

function FLightList() {
    return (
        <>
            <PageHeader PageNumber={1}/>          
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
                        <tr>
                            <th scope="row">AI845</th>
                            <td>AirIndia</td>
                            <td>Mumbai</td>
                            <td>Abu Dabi</td>
                            <td><a href="/flights/edit/202502102" className="btn btn-warning">Edit Price</a>
                                <button className="btn btn-danger">Delete </button></td>
                        </tr>
                        <tr>
                            <th scope="row">6C151</th>
                            <td>Indigo</td>
                            <td>Hyderabad</td>
                            <td>Bengaluru</td>
                            <td><a href="/flights/edit/202502102" className="btn btn-warning">Edit Price</a>
                                <button className="btn btn-danger">Delete </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FLightList;