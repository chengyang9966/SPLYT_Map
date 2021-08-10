import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './routes/Private';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {


  return (
    <Router>
    <Switch>
      <Route path='/' exact component={LoginPage} />
      <Route path='/home' exact component={HomePage} />
      {/* <Route path='/login' exact component={Login} />
      <Route path='/forgetPassword' exact component={ForgetPassword} />
      <Route path='/passwordReset' exact component={ResetPassword} />
      <Route path='/expired' exact component={Expired} /> */}
      <PrivateRoute/>
    </Switch>

  </Router>
   
  );
}

export default App;
