import Form from './Form'
import Navigate from './Navigate'
import Data from './Data'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
let App = () => {
  return (
    <>
    <Router>
    <Navigate/>
      <Switch>
        <Route path='/Form' component={Form} />
        <Route path='/Data' component={Data} />
      </Switch>
    </Router>
    </>
  );
};
export default App;