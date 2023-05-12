//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on component
//step 6. render component into app


import DeleteReview from "../components/Reviews/DeleteReview"
import { csrfFetch } from "./csrf"

const ADD_REVIEW='spots/addReview'
const DELETE_REVIEW='spots/deleteReview'
const GET_REVIEW='spots/getReview'
const GET_REVIEWS='spots/getReviews'
const USER_REVIEWS='spots/userReviews'

//get a review
const receiveReview = review=>{
    return{
        type:GET_REVIEW,
        review
    }
}
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
    console.log("deeeelete thunk review",spotId)
    const response= await csrfFetch (`/api/reviews/${spotId}`,{
        method:"DELETE"
    })
    if(response.ok){
        dispatch(deleteReview(spotId))
        return response
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
        console.log("this is to check response data from server",data)
        
        dispatch(receiveReview(data))
        return data;
    }catch(errors){
        const data=await errors.json()
        console.log("thiiii data ", data.errors)
        return data.errors
    }
}



    //define initial state
    const initialState={
        reviews:{}, currentUserReviews:{}
    }

//review reducer
const reviewsReducer = (state=initialState, action) => {
    // console.log('asdasda aciton review',action.reviews)
    switch(action.type){
        case GET_REVIEWS:{
            // const newState={...state,reviews:{...state.reviews}}
            const newState={reviews:{...state.reviews}}
            // console.log("action keeyinh", action.reviews.Reviews)
            action.reviews.Reviews.forEach(review=>{
                newState.reviews[review.id]=review
            })
            // console.log("is this wokring",newState)
          return newState
        }
        case ADD_REVIEW:{
            const newState={...state};
            newState[action.review.id]=action.review
            return newState

        }
        case DELETE_REVIEW:{
            const newState={...state}
            delete newState[action.reviewId]
        }

        default:
            return state

    }
}

export default reviewsReducer