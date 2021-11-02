import './App.css';
import LandingPage from './LandingPage';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NextJunction from './NextJunction';

function App() {
  var [importFdApi, setImportFdApi] = useState([]);

  useEffect(() => {
    async function wayForFdApi() {
      var foodData = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/allResorts");
      // console.log(foodData.data);
      setImportFdApi(foodData.data);
    }
    wayForFdApi()
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <LandingPage fdData={importFdApi} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/section-nv">
            <NextJunction />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
