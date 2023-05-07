//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on compoenent

import { csrfFetch } from "./csrf";

//3. create constant to use in action ccreator
const GET_ALL_SPOTS='spots/getAllSpots'
const GET_SPOT='spots/getSpot/:spotId'
const ADD_SPOT='spots/addSpot'
const EDIT_SPOT='spots/editSpot/:spotId'
const DELETE_SPOT='spots/deleteSpot/:spotId'

//2. add regular action creator to recieve the information from the thunk action 
//creator and use it as a payload
const getAllSpots = (spots)=> {
    return{
        type:GET_ALL_SPOTS,
        spots,
    }
}
const getSpot =(spot)=>{
    return{
        type:GET_SPOT,
        payload:spot,
    }
}

const addSpot=(spot)=>{
    return{
        type:ADD_SPOT,
        payload:spot
    }
}

const editSpot=(spot)=>{
    return{
        type:EDIT_SPOT,
        payload:spot,
    }
}

const deleteSpot=(spotId)=> {
    return{
        type:DELETE_SPOT,
        payload:spotId
    }
}

//1. add thunk action creator

export const getAllSpotsThunk =()=>async (dispatch)=>{
    const response = await csrfFetch('/api/spots');
    if(response.ok){
    const data = await response.json();
    dispatch(getAllSpots(data))
    return data.Spots;
    }
}

export const getSpotThunk=(spotId)=> async(dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}`);
    if(response.ok){
        const data=await response.json();
        dispatch(getSpot(data))
        return data;
    }
}
//state object
const initialState={}

initi

//reducer
//4. add a case to the case reducer for each action
const spotsReducer = (state = initialState,action )=>{
   switch(action.type){
 case GET_ALL_SPOTS:{
    const newState= {};
    action.spots.forEach(spot=>(newState[spot.id]=spot))
    return newState;
 }
 case GET_SPOT:{
    return {...state,[action.spot.id]:action.spot}
 }
 case ADD_SPOT:{
    const newState={...state};
    newState[action.spot.id]=action.spot;
    return newState


 }
 default:
    return state
} 
}


export default spotsReducer; 