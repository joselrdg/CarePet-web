import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CarelinkRouter } from "./CarelinkRouter";
import { HomeScreen } from "../components/home/HomeScreen";
import { useUser } from "../components/hooks/useUser";
// import { UserContext } from "../context/UserContext";

export const AppRouter = () => {
  const { user } = useUser();
  const pahtCareLink = user !== null ? '/CarePet' : '/auth/login'
  
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={HomeScreen} /> */}
          <Route path="/auth" component={AuthRouter} />
          <Route path={pahtCareLink} component={CarelinkRouter} />
          <Redirect to="/CarePet/" />
        </Switch>
      </div>
    </Router>
  );
};
