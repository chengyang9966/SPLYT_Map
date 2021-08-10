import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './routes/Private';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {


  return (
    <Router>
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/home' exact component={HomePage} />
      <PrivateRoute/>
    </Switch>

  </Router>
   
  );
}

export default App;
