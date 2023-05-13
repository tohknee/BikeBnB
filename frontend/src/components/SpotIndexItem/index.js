import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteSpotThunk, getSpotThunk } from "../../store/spots";
import { Link } from "react-router-dom";
import ReviewList from "../Reviews/ReviewList";
import CreateReviewForm from "../Reviews/CreateReviewForm";
import OpenModalButton from "../OpenModalButton";

const SpotIndexItem = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector((state) => state.spots[spotId]); //this is the spot by id info
  const userObj = useSelector((state) => state.session.user); //this is the entire session obj
  const review = useSelector((state) => state.reviews.reviews);
  const reviewArray = Object.values(review); //loop through arrary for owner id.

  useEffect(() => {
    dispatch(getSpotThunk(spotId));
  }, [dispatch, spotId]);

  //conditional render until spot is not undefined. initial render is undefined
  if (!spot) {
    return null;
  }
  if (!spot.SpotImages) {
    return null;
  }
  //find a review by currentuserid. if true then hide create review
  const reviewOwnerMatcher = reviewArray.find(
    (review) => review.userId === userObj?.id
  );
  const bookingAlert=()=>{
    alert("Feature coming soon")
  }
  return (
    <div>
      <h2>{spot.name}</h2>
      <p>
        Location:{spot.city},{spot.state},{spot.country}
      </p>
      <div className="image-div">
        {spot.SpotImages.map((image) => (
          <img key={image.id} src={image.url}></img>
        ))}
      </div>
      {console.log("checccking spot image", spot.SpotImages)}
      <div>
        Hosted by :{spot.Owner.firstName},{spot.Owner.lastName}
      </div>
      <p>Paragraph: {spot.description}</p>
      <h2>
        <i className="fa fa-star"></i>
        {spot.avgStarRating ? spot.avgStarRating.toFixed(1) : "New"}{" "}
        {spot.numReviews ? "·" : ""}{" "}
        {spot.numReviews === 1
          ? "1 Review"
          : spot.numReviews > 1
          ? `${spot.numReviews} Reviews`
          : ""}
      </h2>
      {/* if session user id does not mathc spot id then we allow to create a review */}
      {userObj?.id !== spot.ownerId && userObj && !reviewOwnerMatcher && (
        <div>
          <CreateReviewForm spotId={spotId}></CreateReviewForm>
          {spot.numReviews === 0 ? <p>Be the first to write a review!</p> : ""}
        </div>
      )}
      <div className="callout">
        callout box div<p>${spot.price} night</p>
        <i className="fa fa-star"></i>
        {spot.avgStarRating ? spot.avgStarRating.toFixed(1) : "New"}
        <button onClick={()=>bookingAlert()}>Reserve</button>
      </div>
      <ReviewList spotId={spotId} />
    </div>
  );
};

export default SpotIndexItem;
