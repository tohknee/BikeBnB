//steps 1. add thunk
//step 2. add regular action creator
//step 3. create constant to use in action creator
//step 4. add a case in the reducer for each case
//step 5. Work on component
//step 6. render component into app


import { csrfFetch } from "./csrf"

const ADD_REVIEW='spots/:spotId/reviews'
const DELETE_REVIEW='spots/:spotId/reviews'
const GET_REVIEW='spots/:spotId/reviews/:reviewId'
const GET_REVIEWS='spots/:spotId/reviews'

const receiveReview = review=>{
    return{
        type:GET_REVIEW,
        review
    }
}

const getSpotReviews = reviews=>{
    return{
        type:GET_REVIEWS,
        reviews
    }
}
//define thunk to make request to backend to fetch reviews
//then dispatch the getspotreviews action with data recieved from server 
export const getSpotReviewsThunk = (spotId) => async(dispatch) =>{
    const response=await csrfFetch(`/api/spots/${spotId}/reviews`);
    if(response.ok){
        const data=await response.json();
        dispatch(getSpotReviews(data))//dispatch action with data
        return data;
    }
}
export const createReview =(reviewToCreate)=> async (dispatch)=> {
    const response = await csrfFetch(`/api/spots/${reviewToCreate.spotId}/reviews`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({rating:reviewToCreate.review})
    });
    const data= await response.json();
    const createdReview = data;
    dispatch(receiveReview)
    return createReview
}
//define initial state
const initialState={
    reviews:{}
}

//review reducer
const reviewsReducer = (state=initialState, action) => {
    console.log('asdasda aciton review',action)
    switch(action.type){
        case GET_REVIEWS:{
            const newState={...state,reviews:{...state.reviews}}
          return newState
        }
        default:
            return state

    }
}

export default reviewsReducer