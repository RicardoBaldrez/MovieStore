import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ChangingComponentProvider } from './common/context/ChangingComponent';
import { UserContextProvider } from './common/context/UserContext' 

import PresentationLoginPage from './pages/PresentationLoginPage';
import MoviesPage from './pages/MoviesPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <UserContextProvider>
          <ChangingComponentProvider>
            <Route path="/" exact>
              <PresentationLoginPage />
            </Route>
          </ChangingComponentProvider>
          <Route path="/catalog" exact>
            <MoviesPage />
          </Route>
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
}