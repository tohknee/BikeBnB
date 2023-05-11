import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetAllSpots from "./components/SpotShow";
import SpotForm from "./components/SpotForm";
import SpotShow from "./components/SpotIndex";
import createSpot from "./components/CreateSpotForm";
import { Route } from "react-router-dom";
import EditSpot from "./components/EditSpotForm";
import GetCurrentUserSpot from "./components/GetCurrentUserSpot";
import { getSpotReviewsThunk } from "./store/reviews";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
      
            {/* make sur epaths are least specific to most specific */}
      <Route exact path='/' component={GetAllSpots}></Route>
      <Route exact path='/spots/new' component={createSpot}></Route>
      <Route exact path='/spots/:spotId/edit' component={EditSpot}></Route>
      {/* <Route exact path='/spots/:spotId' component={getSpotReviewsThunk}></Route> */}
      <Route exact path='/spots/current' component={GetCurrentUserSpot}></Route>
      <Route exact path='/spots/:spotId' component={SpotShow}></Route>
        
        </Switch>}
      
    
    </>
  );
}

export default App;