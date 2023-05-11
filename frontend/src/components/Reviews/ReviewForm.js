import { useState } from "react"
import { useDispatch } from "react-redux"
import { createReviewThunk } from "../../store/reviews"

const ReviewForm =({onSubmit,review,review})=>{
    const [stars,setStars] = useState(spot.stars)
    const [review,setReview]= useState()

    const dispatch=useDispatch()

    review = {
        ...review,
        stars,
        review
    }

    if(formType==="Submit Review"){
        dispatch(createReviewThunk(review))
        // history.push("/") push back to spot id
    }
    
    return (
        <form>
            <h2>HOW WAS YOUR STAY?</h2>
            <textarea value={review} type='text'placeholder="Quick review" 
            onChange={e=>setReview(e.target.value)}></textarea>
        <input type="submit"></input>
        </form>
    )
}

export default ReviewForm