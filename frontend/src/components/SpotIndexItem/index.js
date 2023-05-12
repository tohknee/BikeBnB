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
  // const spot = useSelector(state=>state.spots[spotId])
  const userObj = useSelector((state) => state.session.user); //this is the entire session obj
  const review = useSelector((state) => state.reviews.reviews);
  const reviewArray = Object.values(review); //loop through arrary for owner id.
  // console.log('uuuuser information test=====',userObj.id)
  console.log("cheeeecking for review owner id", review);
  console.log("esssion info", userObj);
  // const owner= useSelector(state=>state.spots[spotId][0])
  // const spotArray=Object.values(spot)
  // console.log("jhfjhggh",spot,"ssa÷dasdaad")
  // console.log("---------",spotArray)
  // console.log("spot owner ifno",owner)

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
        Hosted by Firstname : {userObj.firstName} lastName: {userObj.lastName}{" "}
      </div>
      {/* if session user id does not mathc spot id then we allow to create a review */}
      {userObj.id !== spot.ownerId && (
        <CreateReviewForm spotId={spotId}></CreateReviewForm>
      )}

      <div>Spot reviews</div>

      <ReviewList spotId={spotId} />

      <li>
        <div className="li-contents-flex">
          <Link to={`/spots/${spot.id}`}>Spot #{spot.id}</Link>

          <div className="buttons-container"></div>
        </div>
      </li>
    </div>
  );
};

export default SpotIndexItem;
