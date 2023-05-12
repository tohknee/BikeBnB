
import ReviewForm from "./ReviewForm";
import OpenModalButton from "../OpenModalButton";
const CreateReviewForm =({spotId})=>{
    const reviews= {
        review:'',
        stars:'',
    };

    return (
        <button>This is the create review button
            <OpenModalButton
            modalComponent=
            { <ReviewForm
        reviews={reviews}
        formType="Submit Review"
        spotId={spotId}
        
        // onSubmit={createReview}
        ></ReviewForm>}>
            </OpenModalButton>
        </button>
        
    )
}
export default CreateReviewForm;