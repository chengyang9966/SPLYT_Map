import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './routes/Private';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {


  return (
    <Router>
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/register' exact component={RegisterPage} />
      <PrivateRoute/>
    </Switch>

  </Router>
   
  );
}

export default App;
