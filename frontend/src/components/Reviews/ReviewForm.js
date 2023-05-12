import { useState } from "react"
import { useDispatch } from "react-redux"
import { createReviewThunk } from "../../store/reviews"
import { useModal } from "../../context/Modal"
import StarRatingInput from "./ReviewRatingInput"
import { getSpotThunk } from "../../store/spots"

//passed in params from 
const ReviewForm =({spotId,reviews,formType})=>{
    const [stars,setStars] = useState(1)
    const [review,setReview]= useState("")
    const [errors,setErrors]=useState({})
    const{closeModal} =useModal()
    const dispatch=useDispatch()

    //redeclare review prop
    reviews = {
        ...reviews,
        stars,
        review
    }
    const handleSubmit= async e=>{
        e.preventDefault()
setErrors({})

        if(formType==="Submit Review"){
           const dataErrors= await dispatch(createReviewThunk(reviews,spotId))
        //    console.log("tis before the iffffff",dataErrors.review)
           //not hitting the if statement
            if(dataErrors){
                // console.log("review errrorsasdasd",setErrors(dataErrors))
                return setErrors(dataErrors)
            }
            else
           { closeModal()}
           dispatch(getSpotThunk(spotId))
            
        }
    }
    //for star rating
const onChange =(number)=>{
    setStars(parseInt(number))
}

    return (
        <form onSubmit={handleSubmit}>
            <h2>HOW WAS YOUR STAY?</h2>
            <label>
                {/* errros is an empty array. */}
            {/* {console.log("cjheeeeecking",errors)} */}
            <textarea 
            value={review} 
            type='text'
            placeholder="Quick review" 
            onChange={e=>setReview(e.target.value)}></textarea>
            <StarRatingInput
            stars={stars}
            disabled={false}
            onChange={onChange}
            ></StarRatingInput>
            </label>
          
            <p className="errors">{errors.errors}</p>
            {/* <input 
            type="text"
            value={stars}
            onChange={e=>setStars(e.target.value)}></input>
            <div>replace this with star rating input component</div> */}
            
        <input type="submit" value="submit Button"/>
        </form>
    )
}

export default ReviewForm