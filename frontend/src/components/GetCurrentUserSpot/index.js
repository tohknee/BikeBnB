import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserSpotThunk } from "../../store/spots";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot";
import OpenModalButton from "../OpenModalButton";
import "./new.css"

const GetCurrentUserSpots = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const spotsArray = useSelector((state) => state.spots.currentUserSpots.Spots);
  
  useEffect(() => {
    dispatch(getCurrentUserSpotThunk());
  }, [dispatch]);


  if (!spotsArray) return null;

  return (
    <>
    <h2>Manage Spots</h2>
     <button className="create-spot-button"><Link className="link-text" to={'/spots/new'}>Create new Spot</Link></button>
    <div className="make-gap"></div>
    <div className="all-spots-container">
      {spotsArray.map((spot) => (
        <div className='spot-tile' key={spot.id}>
          <Link to={`/spots/${spot.id}`} >
         <img className="tile-image" src={spot.previewImage}></img>
          <div>{spot.city},{spot.state}</div>
          <div className="top-line">
            <div className="rating-div">
          <i className="fa fa-star"></i>
          <div>{spot.avgRating ? spot.avgRating?.toFixed(1): "New"}</div>
            </div>
          </div>
         </Link> 
         <div className="manage-buttons">
         <button className="edit-link"><Link  to={`/spots/${spot.id}/edit`}>
            Update
          </Link></button> 

          <OpenModalButton buttonText={"Delete"} modalComponent={<DeleteSpot spot={spot}></DeleteSpot>}></OpenModalButton>
       </div>
        </div>
      ))}
    </div>
      </>
  );
};

export default GetCurrentUserSpots;
