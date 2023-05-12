import { useState } from "react"
import { useDispatch } from "react-redux"
import { createReviewThunk } from "../../store/reviews"

//passed in params from 
const ReviewForm =({spotId,reviews,formType})=>{
    const [stars,setStars] = useState(1)
    const [review,setReview]= useState("")
    // const{closeModal} =useModal()
    const dispatch=useDispatch()

    //redeclare review prop
    reviews = {
        ...reviews,
        stars,
        review
    }
    const handleSubmit=e=>{
        e.preventDefault()


        if(formType==="Submit Review"){
            dispatch(createReviewThunk(reviews,spotId))
            // .then(closeModal)
            //close modal
            // history.push("/") push back to spot id
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h2>HOW WAS YOUR STAY?</h2>
            <textarea 
            value={review} 
            type='text'
            placeholder="Quick review" 
            onChange={e=>setReview(e.target.value)}></textarea>
            <input 
            type="text"
            value={stars}
            onChange={e=>setStars(e.target.value)}></input>
            <div>replace this with star rating input component</div>
            
        <input type="submit" value="submit Button"/>
        </form>
    )
}

export default ReviewForm