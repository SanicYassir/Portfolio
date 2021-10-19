import styles from "./App.module.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./containers/Home/home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={Home} />

        <Redirect from="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
