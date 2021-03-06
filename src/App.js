import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
import CustomizeImage from "./components/CustomizeImage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/customize-image" exact component={CustomizeImage} />
        {/* <Route render={() => <h1>404</h1>} /> */}
      </Switch>
    </div>
  );
}

export default App;
