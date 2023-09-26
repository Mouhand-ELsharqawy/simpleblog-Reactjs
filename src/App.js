import NotFoundPage from './404Page';
import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import NavBar from './NavBar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

      <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path= "/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
