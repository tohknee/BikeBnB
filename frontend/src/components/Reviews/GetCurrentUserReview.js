import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReviewsThunk } from "../../store/reviews";


const GetCurrentUserReviews=()=>{
    const dispatch=useDispatch()
    const reviewsArray=useSelector(state=>state)
    console.log("reviews array",reviewsArray)

useEffect(()=>{
    dispatch(getUserReviewsThunk())
},[dispatch])

if(!reviewsArray) return null;

    return(
        <p>current user reviews</p>
    )
}


export default GetCurrentUserReviews