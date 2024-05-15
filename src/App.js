import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = "http://www.google.com";
  //const person = {name: 'Yoshi', age: 30};
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>


        {/* <div className="content">
          <h1>{title}</h1>
          <p>Liked  {likes} times</p>
          <p>{person.name}</p>
          <p>{10}</p>
          <p>{"Hello, Ninjas"}</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{Math.random() * 10}</p>
          <a href={link}>Google site</a>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
