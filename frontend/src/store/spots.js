//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on component
//step 6. render component into app

import reactRouterDom from "react-router-dom";
import { csrfFetch } from "./csrf";

//3. create constant to use in action ccreator
const GET_ALL_SPOTS = "spots/getAllSpots";
const GET_SPOT = "spots/getSpot/:spotId";
const ADD_SPOT = "spots/new";
const EDIT_SPOT = "spots/editSpot/:spotId";
const DELETE_SPOT = "spots/deleteSpot/:spotId";
const GET_USER_SPOT = "/spots/current";

//2. add regular action creator to recieve the information from the thunk action
//creator and use it as a payload
const getAllSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    spots,
  };
};
const getSpot = (spot) => {
  return {
    type: GET_SPOT,
    spot,
  };
};

const getCurrentUserSpots = (spots) => {
  return {
    type: GET_USER_SPOT,
    spots,
  };
};

const addSpot = (spot) => {
  return {
    type: ADD_SPOT,
    spot,
  };
};

const editSpot = (spot) => {
  return {
    type: EDIT_SPOT,
    spot,
  };
};

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    spotId,
  };
};

//1. add thunk action creator
export const getAllSpotsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots");
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllSpots(data));
    return data.Spots;
  }
};

export const getSpotThunk = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getSpot(data));
    return data;
  }
};

export const editSpotThunk = (spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot.id}`, {
    method: "PUT",
    body: JSON.stringify(spot),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editSpot(data));
    return data;
  } else {
    const data = await response.json();
    return data;
  }
};

export const addSpotThunk = (spot) => async (dispatch) => {
  //try catch block to catch errors
  try {
    const response = await csrfFetch("/api/spots", {
      method: "POST",
      body: JSON.stringify(spot),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(addSpot(data));
    console.log(data.id, "---------asdasdasdasdads");
    for (const image of spot.SpotImages) {
      await dispatch(createImageThunk(data.id, image));
      return data;
      //if there are errors then turn errors to json
    }
  } catch (errors) {
    const data = await errors.json();
    console.log("create spot errros", errors);
    return data;
  }
};
export const getCurrentUserSpotThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots/current");

  if (response.ok) {
    const data = await response.json();
    dispatch(getCurrentUserSpots(data));
    return data;
  }
};
//fix delete spot
export const deleteSpotThunk = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSpot(spotId.id));
    return response; 
  }
};
export const createImageThunk = (spot, image) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot}/images`, {
    //call thunk into add spot or send image images to
    method: "POST",
    body: JSON.stringify(image),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//state object
const initialState = { allSpots: {}, currentUserSpots: {} };

//reducer
//4. add a case to the case reducer for each action
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPOTS: {
      const newState = {
        allSpots: { ...state.allSpots }, //make copy of oldstate all spots
        currentUserSpots: { ...state.currentUserSpots },
      }; //deep clone entire state to prevent loosing currentuserspot
      action.spots.Spots.forEach((spot) => {
        newState.allSpots[spot.id] = spot;
      });
      return newState;
    }
    case GET_SPOT: {
      //spot ojbect(action.spot) is fetched from api then added to state object that matches spots
      return { ...state, [action.spot.id]: action.spot };
    }
    case ADD_SPOT: {
      const newState = { ...state };
      newState[action.spot.id] = action.spot;
      return newState;
    }
    case EDIT_SPOT: {
      const newState = { ...state, allSpots: { ...state.allSpots } }; //create ne object state clone
      newState[action.spot.id] = action.spot; //update clone with new key value pair of id of fetched spot and value o the spot. add new spot or update
      return newState;
    }
    case GET_USER_SPOT: {
      return { ...state, currentUserSpots: action.spots };
    }
    case DELETE_SPOT: {
      const newState = {
        ...state,
        ...state.allSpots[action.spotId],
        ...state.currentUserSpots[action.spotId],
      };
      delete newState.allSpots[action.spotId];
      delete newState.currentUserSpots[action.spotId];
      return newState;
    }
    default:
      return state;
  }
};

export default spotsReducer;
