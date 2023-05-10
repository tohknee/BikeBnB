import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSpotThunk } from "../../store/spots";
import { getSpotReviewsThunk } from "../../store/reviews";

const ReviewList = ({spotId})=>{
    const dispatch=useDispatch();
    const spot =useSelector(state=>state.spots[spotId])//gets the spot
    const reviewsObj=useSelector(state=>state.reviews.reviews)
    const reviewsArray=Object.values(reviewsObj)
    console.log('asdadadasdobject',reviewsObj)
    console.log("reeeeview",reviewsArray)
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))//dispatch to trigger an acction to modify the store state
        dispatch(getSpotReviewsThunk(spotId))
    },[dispatch,spotId])//the getSpotthunk will retrieve data form api and update store with the new data

    // console.log()
    return(
        <div>
            {reviewsArray.map(review=> {
                <div key={review.id}></div>
            })}
            workinbg revuew
        </div>
    )
}

export default ReviewList