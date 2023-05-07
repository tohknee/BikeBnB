import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetAllSpots from "./components/GetSpots";
import SpotForm from "./components/SpotForm";
import SpotShow from "./components/SpotShow";
import createSpot from "./components/CreateSpotForm";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import EditSpot from "./components/EdiSpot";
import GetCurrentUserSpot from "./components/GetCurrentUserSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch></Switch>}
      <Switch>

      <Route exact path='/' component={GetAllSpots}></Route>
      <Route exact path='/spots/new' component={SpotForm}></Route>
      <Route exact path='/spots/:spotId' component={SpotShow}></Route>
      <Route exact path='/spots/addSpot' component={createSpot}></Route>
      <Route exact path='/spots/:spotId/edit' component={EditSpot}></Route>
      <Route exact path='/spots/:userId' component={GetCurrentUserSpot}></Route>
      </Switch>
    
    </>
  );
}

export default App;