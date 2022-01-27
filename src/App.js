import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Project from './Components/Project'


// 1 import browser router route and switch from react router dom.
// 2 then place browser router with switch inside and the routes we need for each component.
// 3 the route has a component its pointing towards and a path that it will follow in the webbrowser.
// 4 when a route has the word of another route and more be sure to place that one with the least words on the bottom.
//import all components used.

function App() {
  return (<BrowserRouter>
            <Switch>
              <Route component={Home} path='/'></Route>
              <Route component={About} path='/about'></Route>
              <Route component={SinglePost} path='/post/:slug'></Route>
              <Route component={Post} path='/post'></Route>
              <Route component={Project} path='/projecy'></Route>
            </Switch>
          </BrowserRouter>)
}

export default App;
