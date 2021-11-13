import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserContextProvider } from './common/context/UserContext' 

import Login from './pages/Login';
import Movies from './pages/Movies';
import Presentation from './pages/Presentation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Presentation />
        </Route>
        <UserContextProvider>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/catalog">
            <Movies />
          </Route>
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
}