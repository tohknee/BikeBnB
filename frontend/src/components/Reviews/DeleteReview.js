import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../store/reviews"
import { useModal } from "../../context/Modal"
//review is passed in from reviewlist
const DeleteReview = ({review})=>{
    const dispatch=useDispatch()
    // console.log('console.loooog ', review)

    // const {closeModal}=useModal()

    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteReviewThunk(review))
        // .then(closeModal)
       
    }
    return (
        <div>
            <div>Delete modal</div>
            <button onClick={handleDelete}>DELETE REVIEW BUTTON IN DELETE REVIEW</button>
        </div>
    )
}

export default DeleteReview