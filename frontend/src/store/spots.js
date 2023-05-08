//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on compoenent

import reactRouterDom from "react-router-dom";
import { csrfFetch } from "./csrf";

//3. create constant to use in action ccreator
const GET_ALL_SPOTS='spots/getAllSpots'
const GET_SPOT='spots/getSpot/:spotId'
const ADD_SPOT='spots/addSpot'
const EDIT_SPOT='spots/editSpot/:spotId'
const DELETE_SPOT='spots/deleteSpot/:spotId'
const GET_USER_SPOT='/spots/current'

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
        spot,
    }
}

const getCurrentUserSpots=(spots)=>{
    return {
        type:GET_USER_SPOT,
        spots,
    }
}


const addSpot=(spot)=>{
    return{
        type:ADD_SPOT,
        spot
    }
}

const editSpot=(spot)=>{
    return{
        type:EDIT_SPOT,
        spot,
    }
}

const deleteSpot=(spotId)=> {
    return{
        type:DELETE_SPOT,
        spotId
    }
}

//1. add thunk action creator

export const getAllSpotsThunk =()=>async (dispatch)=>{
    const response = await csrfFetch('/api/spots');
    if(response.ok){
    const data = await response.json();
    dispatch(getAllSpots(data))
    // console.log("labe",data.Spots)
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

export const editSpotThunk=(spotId, editedSpot)=> async(dispatch)=>{
    const response =await csrfFetch(`/api/spots/${spotId}/edit`,{
        method: 'PUT',
        body:JSON.stringify(editedSpot),
        headers: {
            'Content-Type':'application/json'
        }
    })

    if(response.ok){
        const data=await response.json();
        dispatch(getSpot(data)) 
        return data;
    }
}
export const getCurrentUserSpotThunk=()=>async(dispatch)=>{
    const response = await csrfFetch('/api/spots/current');
    if(response.ok){
        const data=await response.json();
        dispatch(getCurrentUserSpots(data))
        return data;
    }
}

//state object
const initialState={allSpots:{}, currentUserSpots:{}}


//reducer
//4. add a case to the case reducer for each action
const spotsReducer = (state = initialState,action )=>{
   switch(action.type){

 case GET_ALL_SPOTS:{
    const newState= {allSpots:{...state.allSpots}, //make copy of oldstate all spots
    currentUserSpots:{...state.currentUserSpots}};//deep clone entire state to prevent loosing currentuserspot
    // console.log('new',action)
    // action.spots.Spots.forEach(spot=>(newState[spot.id]=spot))
    // console.log(action.spots,'action spoi')
    // console.log()
    action.spots.Spots.forEach(spot => {
        newState.allSpots[spot.id]=spot
    })
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
 case EDIT_SPOT:{
    const newState={...state};
    newState[action.spot.id]=action.spot
    return newState
 }
 case GET_USER_SPOT:{
    const newState={}
 }
 default:
    return state
} 
}


export default spotsReducer; 