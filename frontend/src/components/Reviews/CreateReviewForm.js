import ReviewForm from "./ReviewForm";
import OpenModalButton from "../OpenModalButton";
import './ReviewRating.css'
const CreateReviewForm = ({ spotId }) => {
  const reviews = {
    review: "",
    stars: "",
  };

  return (
    <div className="containers">

    <OpenModalButton 
      buttonText={"        Submit your review"}
      modalComponent={
        <ReviewForm
        reviews={reviews}
        formType="Submit Review"
        spotId={spotId}
        ></ReviewForm>
      }
      ></OpenModalButton>
      </div>
  );
};
export default CreateReviewForm;
