
import ReviewForm from "./ReviewForm";
import OpenModalButton from "../OpenModalButton";
const CreateReviewForm =({spotId})=>{
    const reviews= {
        review:'',
        stars:'',
    };

    return (
       
            <OpenModalButton buttonText={"review"}
            modalComponent=
            { <ReviewForm
        reviews={reviews}
        formType="Submit Review"
        spotId={spotId}
        ></ReviewForm>}>
            </OpenModalButton>
      
        
    )
}
export default CreateReviewForm;