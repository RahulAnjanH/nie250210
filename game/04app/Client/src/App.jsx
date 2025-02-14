//import Counter from "./counter"
//import Pageheader from "./header/PageHeader"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameList from './games/GameList'
import Gamecreate from './games/GameCreate'
import GameEdit from './games/GameEdit'
function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<GameList/>}/>
          <Route path="/games/list"  element={<GameList/>}/>
          <Route path="/games/create"  element={<Gamecreate/>}/>
          <Route path="/games/edit/:id"  element={<GameEdit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
export default App
