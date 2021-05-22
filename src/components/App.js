import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from '../contexts/AuthContext';
import { FirebaseDataProvider } from '../contexts/FirebaseDataContext'
import PrivateRoute from './Login/PrivateRoute';
import Login from './Login/Login';
import Signup from './Login/Signup';
import ForgotPassword from './Login/ForgotPassword';
import Home from './Home/Home';
import UpdateProfile from './Settings/UpdateProfile';
import PostNewAd from './PostNewAd/PostNewAd'
import CategoryList from "./Categories/CategoryList";
import AdDetails from "./Home/AdDetails";
import SelectedCategory from "./Categories/SelectedCategory";
import MyAdsComponent from "./MyAds/MyAdsComponent";
import SettingsMenu from './Settings/SettingsMenu'

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
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/new" component={PostNewAd} />
              <Route exact path="/category" component={CategoryList} />
              <Route exact path="/my-ads" component={MyAdsComponent} />
              <Route exact path="/settings" component={SettingsMenu} />
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
