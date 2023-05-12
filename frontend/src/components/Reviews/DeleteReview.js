import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../store/reviews"
import { getSpotThunk } from "../../store/spots"

//review is passed in from reviewlist
const DeleteReview = ({review})=>{
    const dispatch=useDispatch()
    console.log('console.loooog ', review)

    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteReviewThunk(review))
        dispatch(getSpotThunk(review))
    }
    return (
        <div>
            <button onClick={handleDelete}>DELETE REVIEW BUTTON IN DELETE REVIEW</button>
        </div>
    )
}

export default DeleteReview