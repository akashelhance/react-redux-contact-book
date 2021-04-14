import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { povider, Provider } from "react-redux";
import store from "./store";

import "./styles/App.css";
import Contacts from "./components/contacts/Contacts";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <Navbar />
          <div className="container">
            <div className="py-3">
              <Contacts />
            </div>
          </div>
          <Switch>

          </Switch>

        </div>

      </Router>
    </Provider>

  );
}

export default App;
