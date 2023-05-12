//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on component
//step 6. render component into app

import { csrfFetch } from "./csrf"

const ADD_REVIEW='spots/addReview'
const DELETE_REVIEW='spots/deleteReview'
const CLEAN_UP='spots/cleanup'
const GET_REVIEWS='spots/getReviews'


//get all spot reviews
const getSpotReviews = reviews=>{
    return{
        type:GET_REVIEWS,
        reviews
    }
}
const deleteReview=review=>{
    return{
        type:DELETE_REVIEW,
        review
    }

}
const createReview=review=>{
    return{
        type:ADD_REVIEW,
        review
    }
}

//this will just run to overwrite the state
export const cleanUp =()=> {
return {
    type:CLEAN_UP
}
}
//define thunk to make request to backend to fetch reviews
//then dispatch the getspotreviews action with data recieved from server 
export const getSpotReviewsThunk = (spotId) => async(dispatch) =>{
    const response=await csrfFetch(`/api/spots/${spotId}/reviews`);
    if(response.ok){
        const data=await response.json();//data is an array of reviews by spot id
        dispatch(getSpotReviews(data))//dispatch action with data
        return data;
    }
}


export const deleteReviewThunk=(spotId)=>async(dispatch)=>{
    // console.log("deeeelete thunk review",spotId)
    const response= await csrfFetch (`/api/reviews/${spotId}`,{
        method:"DELETE"
    })
    if(response.ok){
        dispatch(deleteReview(spotId))
        // return response
    }
}
//review is first then spot id,
export const createReviewThunk =(review,spotId )=> async (dispatch)=> {
    // console.log('string review to create',spotId)
    try{

        const response = await csrfFetch(`/api/spots/${spotId}/reviews`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(review)
        });   
        const data= await response.json();
        // console.log("this is to check response data from server"data)
        
        dispatch(createReview(data))
        return data;
    }catch(errors){
        const data=await errors.json()
        console.log("thiiii data ", data.errors)
        return data.errors
    }
}



    //define initial state
    const initialState={
        reviews:{}, currentUserReviews:{}, 
    }

//review reducer
const reviewsReducer = (state=initialState, action) => {
    // console.log('asdasda aciton review',action.reviews)
    switch(action.type){
        case CLEAN_UP:{
            const newState={...state,
                reviews:{},
                currentUserReviews:{}
            }
        }
        case GET_REVIEWS:{
            // const newState={...state,reviews:{...state.reviews}}
            const newState={...state , reviews:{}}
            // console.log("action keeyinh", action.reviews.Reviews)
            action.reviews?.Reviews?.forEach(review=>{
                newState.reviews[review.id]=review
            })
            // console.log("is this wokring",newState)
          return newState
        }
        case ADD_REVIEW:{
            const newState={...state,
                reviews:{...state.reviews},
            [action.review.id]:action.review};
            newState[action.review.id]=action.review
           console.log("thasdadsa new state log",newState.length)
            return newState

        }
        case DELETE_REVIEW:{
            //create new object copy with properties of state
            //make copies of the all reviews and currentuserreviews
            const newState={...state,
            reviews:{...state.reviews},
        currentUserReviews:{...state.currentUserReviews}}
        //then delete the review by id from both objects
            delete newState.reviews[action.review]
            delete newState.currentUserReviews[action.review]
        return newState
        }

        default:
            return state

    }
}

export default reviewsReducer