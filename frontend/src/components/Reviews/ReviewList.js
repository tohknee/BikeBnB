import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSpotThunk } from "../../store/spots";
import { getSpotReviewsThunk } from "../../store/reviews";

const ReviewList = ({spotId})=>{
    const dispatch=useDispatch();
    // const spot =useSelector(state=>state.spots[spotId])//gets the spot
    const reviewsObj=useSelector(state=>state.reviews.reviews)
    // const state=useSelector(state=>state)
    const reviewsArray=Object.values(reviewsObj)
    // console.log('this si the state',state)
    // console.log('asdadadasdobject',reviewsObj)
    console.log("reeeeview",reviewsArray)
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))//dispatch to trigger an acction to modify the store state
        dispatch(getSpotReviewsThunk(spotId))
    },[dispatch,spotId])//the getSpotthunk will retrieve data form api and update store with the new data

    // console.log()
    console.log("checking the arraY", reviewsArray[0])
    return(
        <div>
            {/* currently not mappinng the the reviews in the current spot */}
            {reviewsArray.map(review=> {
            <Fragment key={review.id}>
                <h2>{review.review}</h2>
                {console.log("cheeeecking if this work",review.review)}
                
                <p>asdsad</p>
            </Fragment>
            
            })}
            workinbg revuew
        </div>
    )
}

export default ReviewList