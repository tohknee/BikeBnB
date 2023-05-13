import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteSpotThunk, getSpotThunk } from "../../store/spots";
import { Link } from "react-router-dom";
import ReviewList from "../Reviews/ReviewList";
import CreateReviewForm from "../Reviews/CreateReviewForm";

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
  return (
    <div>
      <h2>SpotName:{spot.name}</h2>
      <p>
        address:{spot.address},state-{spot.state},country-{spot.country}
      </p>
      <div>
        Images div
        {spot.SpotImages.map((image) => (
          <img key={image.id} src={image.url}></img>
        ))}
      </div>
      <div>
        Hosted by Firstname : {spot.Owner.firstName} lastName: {spot.Owner.lastName}{" "}
      </div>
      <h2>
      <i className="fa fa-star"></i>{spot.avgStarRating? spot.avgStarRating :"New"}{spot.numReviews?spot.numReviews:""}
      </h2>  
      {/* if session user id does not mathc spot id then we allow to create a review */}
      {userObj?.id !== spot.ownerId && userObj && (
        <CreateReviewForm spotId={spotId}></CreateReviewForm>
      )}
      {spot.numReviews===0?(<p>Be the first to write a review!</p>):""}
      <ReviewList spotId={spotId}/>
        
    </div>
  );
};

export default SpotIndexItem;
