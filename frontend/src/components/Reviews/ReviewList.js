import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSpotThunk } from "../../store/spots";
import { deleteReviewThunk, getSpotReviewsThunk } from "../../store/reviews";
import DeleteReview from "./DeleteReview";
import OpenModalButton from "../OpenModalButton";

const ReviewList = ({spotId})=>{
    const dispatch=useDispatch();
    // const spot =useSelector(state=>state.spots[spotId])//gets the spot
    const reviewsObj=useSelector(state=>state.reviews.reviews)
    // const state=useSelector(state=>state)
    const reviewsArray=Object.values(reviewsObj)
    const spotInfo=useSelector(state=>state.spots[spotId])

    useEffect(()=>{ dispatch(getSpotReviewsThunk(spotId))
            dispatch(getSpotThunk(spotId))//dispatch to trigger an acction to modify the store state
       
        // dispatch(deleteReviewThunk(spotId))
    },[dispatch,spotId])//the getSpotthunk will retrieve data form api and update store with the new data
const matchUser= useSelector(state=>state.session.user)

    // console.log("checking the arraY", reviewsArray)
if(!reviewsArray) return null;
        ///this get tthe object of session user. has name email id
    
    return(
        <div>
            {/* {console.log("review obj--------",spotInfo)} */}
            <h2>Star Reviews AVG rating"[{spotInfo.avgStarRating}]"  number of reviews [{spotInfo.numReviews}] </h2>
            {reviewsArray.map(review=> (
            <ul key={review.id}>
                {/* {console.log("lloooooging review",review.User)} */}
                <li>Review users name: {review.User.firstName}</li>
                <li>Created at {review.createdAt}</li>
                <li>Review contents :  {review.review}</li>
                <li>Star rating    {review.stars}</li>
                {/* {console.log("asdasdsadsass==========",review.userId)}
                {console.log("user to match -===-=-=-=-",matchUser.id)} */}
                {/* if session user id matches the review id then we show delete modal button */}
                {matchUser.id===review.userId &&(
                    <OpenModalButton
                    buttonText="delete review modal button"
                    modalComponent={<DeleteReview review={review.id}></DeleteReview>}></OpenModalButton>
                    // 
                 )} 
            </ul>
            
            ))}
        </div>
    )
}

export default ReviewList