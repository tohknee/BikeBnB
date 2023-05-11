import { createReview } from "../../store/reviews";
import ReviewForm from "./ReviewForm";

const CreateReviewForm =()=>{
    const review= {
        review:'',
        stars:'',
    };

    return (
        <ReviewForm
        review={review}
        formType="Submit Review"
        // onSubmit={createReview}
        ></ReviewForm>
    )
}
export default CreateReviewForm;