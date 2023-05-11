import { useState } from "react"
import { useDispatch } from "react-redux"
import { createReviewThunk } from "../../store/reviews"

const ReviewForm =({spotId,reviews,formType})=>{
    const [stars,setStars] = useState(1)
    const [review,setReview]= useState("")
    // const{closeModal} =useModal()
    const dispatch=useDispatch()

    reviews = {
        ...review,
        stars,
        review
    }
    const handleSubmit=e=>{
        e.preventDefault()


        if(formType==="Submit Review"){
            dispatch(createReviewThunk(review,spotId))
            // .then(closeModal)
            //close modal
            // history.push("/") push back to spot id
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>HOW WAS YOUR STAY?</h2>
            <textarea value={review} 
            type='text'
            placeholder="Quick review" 
            onChange={e=>setReview(e.target.value)}></textarea>
            
        <input type="submit" value="submit Button"/>
        </form>
    )
}

export default ReviewForm