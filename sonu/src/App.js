import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
export default App;