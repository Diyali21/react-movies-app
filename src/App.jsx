// import { ColorGame } from "./ColorGame";
// import { MsgList } from "./MsgList";
import "./styles.css";
// import { UserList } from "./UserList";
import { Routes, Route, Link, Navigate } from "react-router";
import { UserList } from "../pages/UserList";
import { ColorGame } from "../pages/ColorGame";
import { Home } from "../pages/Home";
import { MovieList } from "../pages/MovieList";
// Task - Done
// 1. /movies - MovieList
// 2. /color-game
// 3. /users
// 4. /home -> Welcome to movie app

// Component = UI + Logic
// Default Export
export default function App() {
  return (
    <div className="App">
       <Link to ="/">Home</Link> |
        <Link to ="/movies">Movies</Link> |
        <Link to ="/color-game">Color Game</Link> |
        <Link to ="/users">Users</Link>
        {/* <Link to ="/users">Users</Link>
        <Link to ="/color-game">Color Game</Link> */}
       <Routes>
        {/* <Route path = "/" element={<Home/>}></Route> */}
        <Route path="films" element={<Navigate to ="/movies" replace />}/>
        <Route path = "movies" element={<MovieList/>}></Route>
        <Route path = "users" element={<UserList/>}></Route>
        <Route path = "color-game" element={<ColorGame/>}></Route>

        <Route path="home" element={<Navigate to ="/" replace />}/>
        <Route path="/" element={<Home/>}/>
       </Routes>
    </div>
  );
}
