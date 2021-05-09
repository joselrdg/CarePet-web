import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CarelinkRouter } from "./CarelinkRouter";
import { useUser } from "../components/hooks/useUser";

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
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
