import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ChangingComponentProvider } from './common/context/ChangingComponent';

import PresentationPage from './pages/PresentationPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ChangingComponentProvider>
          <Route path="/" exact>
            <PresentationPage />
          </Route>
        </ChangingComponentProvider>
      </Switch>
    </BrowserRouter>
  );
}