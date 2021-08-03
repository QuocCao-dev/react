import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* :type:id EX: dog/123 : xem con chó với id là 123 */}
        {/* :type:id EX: cat/456 : xem con mèo với id là 456 */}
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/pet-details-not-found">
            <PetDetailsNotFound />
          </Route>
          <Route path="/:type/:id">
            <PetDetailsPage />
          </Route>
          {/* :type EX: dog :  xem danh sách chó */}
          <Route path="/:type?" exact>
            <HomePage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
