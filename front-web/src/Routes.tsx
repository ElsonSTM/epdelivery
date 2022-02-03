
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar/Index';
import Orders from "./Order";
import Tracker from "./Tracker";

function Routes(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/tracker">
          <Tracker />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;