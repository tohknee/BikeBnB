import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../store/reviews"


const DeleteReview = ({review})=>{
    const dispatch=useDispatch()
    console.log('console.loooog ', review)

    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteReviewThunk(review.id))
    }
    return (
        <div>
            <button onClick={handleDelete}>DELETE REVIEW</button>
        </div>
    )
}

export default DeleteReview