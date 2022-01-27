import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Project from './Components/Project'
import NavBar from "./Components/NavBar"


// 1 import BrowserRouter route and Routes from react router dom.
// 2 then place BrowserRouter with Routes inside and the Route we need for each component.
// 3 the Route has the component its pointing at using element = {} and a path that it will follow in the webbrowser using path = ''
// 4 when a Route has the path word of another route pathword and more be sure to place that one with the least words on the bottom.
// 5 import all components used.

function App() {
  return (<BrowserRouter>
          <NavBar/>
            <Routes>
              <Route element={<Home />} path='/'></Route>
              <Route element={<About />} path='/about'></Route>
              <Route element={<SinglePost />} path='/post/:slug'></Route>
              <Route element={<Post />} path='/post'></Route>
              <Route element={<Project />} path='/project'></Route>
            </Routes>
          </BrowserRouter>)
}

export default App;
