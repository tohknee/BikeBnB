import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSpotThunk } from "../../store/spots";
import { deleteReviewThunk, getSpotReviewsThunk } from "../../store/reviews";
import DeleteReview from "./DeleteReview";

const ReviewList = ({spotId})=>{
    const dispatch=useDispatch();
    // const spot =useSelector(state=>state.spots[spotId])//gets the spot
    const reviewsObj=useSelector(state=>state.reviews.reviews)
    // const state=useSelector(state=>state)
    const reviewsArray=Object.values(reviewsObj)
    const spotInfo=useSelector(state=>state)
    // console.log('this si the state',state)
    // console.log('asdadadasdobject',reviewsObj)
    // console.log("reeeeview",reviewsArray)
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))//dispatch to trigger an acction to modify the store state
        dispatch(getSpotReviewsThunk(spotId))
        dispatch(deleteReviewThunk(spotId))
    },[dispatch,spotId])//the getSpotthunk will retrieve data form api and update store with the new data

    // console.log()
    // console.log("checking the arraY", reviewsArray)

        ///this get tthe object of session user. has name email id
    const matchUser= useSelector(state=>state.session.user)
    return(
        <div>
            {/* {console.log("review obj--------",spotInfo)} */}
            <h2>Star Reviews AVG rating"[]"  number of reviews [] </h2>
            {reviewsArray.map(review=> (
            <Fragment key={review.id}>
                {/* {console.log("lloooooging review",review.User)} */}
                <div>Review users name: {review.User.firstName}</div>
                <div>Created at {review.createdAt}</div>
                <h2>Review title:{review.review}</h2>
                <div>Star rating    {review.stars}</div>
                {/* {console.log("asdasdsadsass==========",review.userId)}
                {console.log("user to match -===-=-=-=-",matchUser.id)} */}
                {/* if session user id matches the review id then we show delete button */}
                {matchUser.id===review.userId &&(
                
                    <DeleteReview review={review.id}></DeleteReview>
                 )} 
                    

            </Fragment>
            
            ))}
        </div>
    )
}

export default ReviewList