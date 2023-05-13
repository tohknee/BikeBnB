import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk, getSpotReviewsThunk } from "../../store/reviews";
import { useModal } from "../../context/Modal";
import StarRatingInput from "./ReviewRatingInput";
import { getSpotThunk } from "../../store/spots";

//passed in params from
const ReviewForm = ({ spotId, reviews, formType }) => {
  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  //redeclare review prop
  reviews = {
    ...reviews,
    stars,
    review,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (formType === "Submit Review") {
      const dataErrors = await dispatch(
        createReviewThunk(reviews, spotId)
      ).then(closeModal);
      dispatch(getSpotReviewsThunk(spotId));
      dispatch(getSpotThunk(spotId))
      if (dataErrors) {
        setErrors(dataErrors);
      }
    }
  };
  //for star rating
  const onChange = (number) => {
    setStars(parseInt(number));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>HOW WAS YOUR STAY?</h2>
      <label>
        <textarea
          value={review}
          type="text"
          placeholder="Quick review"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <StarRatingInput
          stars={stars}
          disabled={false}
          onChange={onChange}
        ></StarRatingInput>
      </label>
      <p className="errors">{errors.errors}</p>
      <input type="submit" value="submit Button" />
    </form>
  );
};

export default ReviewForm;
