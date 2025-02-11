//import Counter from "./counter"
import FlightCreate from "./flights/FlightCreate"
import FlightEdit from "./flights/FlightEdit"
import FLightList from "./flights/FlightList"
//import Pageheader from "./header/PageHeader"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullName from "./FullName"
function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<FLightList/>}/>
          <Route path="/flights/list"  element={<FLightList/>}/>
          <Route path="/flights/create"  element={<FlightCreate/>}/>
          <Route path="/flights/edit/:id"  element={<FlightEdit/>}/>
        </Routes>
      </BrowserRouter>
      <FullName/>
    </div>
    </>
  )
}
export default App
