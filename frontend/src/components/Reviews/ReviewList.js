import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cleanUp,
  getSpotReviewsThunk,
} from "../../store/reviews";
import DeleteReview from "./DeleteReview";
import OpenModalButton from "../OpenModalButton";

const ReviewList = ({ spotId }) => {
  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.reviews.reviews);
  const reviewsArray = Object.values(reviewsObj);
  const spotInfo = useSelector((state) => state.spots[spotId]);

  useEffect(() => {
    dispatch(getSpotReviewsThunk(spotId));

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, spotId]); //the getSpotthunk will retrieve data form api and update store with the new data

  const matchUser = useSelector((state) => state.session.user);

//sort reviews so newewst is on top
  reviewsArray.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

  
  if (!reviewsArray.length) return null;

  return (
    <div>
      {reviewsArray.map((review) => (
        <ul key={review.id}>
          <li>Review users name: {review.User.firstName}</li>
          <li>Created at: {new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</li>
          <li>Review contents : {review.review}</li>
          <li>Star rating {review?.stars}</li>
          {/* if session user id matches the review id then we show delete modal button and if there is a user*/}
          {matchUser && matchUser.id === review.userId && (
            <OpenModalButton
              buttonText="delete review modal button"
              modalComponent={<DeleteReview spotId={spotId} review={review.id}></DeleteReview>}
            ></OpenModalButton>
            //
          )}
        </ul>
      ))}
    </div>
  );
};

export default ReviewList;
