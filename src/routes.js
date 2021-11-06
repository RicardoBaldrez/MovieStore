import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import PresentationPage from './pages/PresentationPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PresentationPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}