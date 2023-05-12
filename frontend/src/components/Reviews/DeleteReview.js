import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../store/reviews"

//review is passed in form review form
const DeleteReview = ({review})=>{
    const dispatch=useDispatch()
    console.log('console.loooog ', review)

    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteReviewThunk(review))
    }
    return (
        <div>
            <button onClick={handleDelete}>DELETE REVIEW</button>
        </div>
    )
}

export default DeleteReview