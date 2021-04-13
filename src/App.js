import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
