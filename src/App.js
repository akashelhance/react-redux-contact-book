import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { povider, Provider } from "react-redux";
import store from "./store";

import "./styles/App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <Navbar />
          <Switch>
          <div className="container">
            <div className="py-3">
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
            <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
            
            </div>
            </div>
        
            </Switch>
      </div>

      </Router>

   
    </Provider>

  );
}

export default App;
