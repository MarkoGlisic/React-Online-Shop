import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from '../contexts/AuthContext';
import { FirebaseDataProvider } from '../contexts/FirebaseDataContext'
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import PostNewAd from './PostNewAd'
import CategoryList from "./CategoryList";
import AdDetails from "./AdDetails";
import SelectedCategory from "./SelectedCategory";


function App() {

  return (
    <div className="App">
      <>
        <Router>
          <AuthProvider>
            <FirebaseDataProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/new" component={PostNewAd} />
              <Route exact path="/category" component={CategoryList} />
              <Route exact path="/category/:id" component={SelectedCategory} />
              <Route exact path="/:id" component={AdDetails} />
            </Switch>
            </FirebaseDataProvider>
          </AuthProvider>
        </Router>
      </>
    </div>
  );
}

export default App;
