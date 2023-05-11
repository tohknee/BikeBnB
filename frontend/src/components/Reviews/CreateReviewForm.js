import { createReview } from "../../store/reviews";
import ReviewForm from "./ReviewForm";
import OpenModalButton from "../OpenModalButton";
const CreateReviewForm =({spotId})=>{
    const review= {
        review:'',
        stars:'',
    };

    return (
        <button>This is the create review button
            <OpenModalButton
            modalComponent={ <ReviewForm
        review={review}
        formType="Submit Review"
        spotId={spotId}
        
        // onSubmit={createReview}
        ></ReviewForm>}>
            </OpenModalButton>
        </button>
        
    )
}
export default CreateReviewForm;