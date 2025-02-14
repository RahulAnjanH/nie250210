//import './App.css'
import GameList from "./game_asset/GameList"
import GameCreate from "./game_asset/GameCreate"
import GameEdit from "./game_asset/GameEdit"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
          <BrowserRouter>
          <Routes>
          <Route path="" element={<GameList/>}/>
          <Route path="/games/list"  element={<GameList/>}/>
          <Route path="/games/create"  element={<GameCreate/>}/>
          <Route path="/games/edit/:id"  element={<GameEdit/>}/>
        </Routes>
          </BrowserRouter>
          </div>
    </>
  )
}

export default App
