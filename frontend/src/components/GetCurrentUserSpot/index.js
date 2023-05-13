import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserSpotThunk } from "../../store/spots";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot";
import OpenModalButton from "../OpenModalButton";
const GetCurrentUserSpots = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state.log", state);
  const spotsArray = useSelector((state) => state.spots.currentUserSpots.Spots);
  useEffect(() => {
    dispatch(getCurrentUserSpotThunk());
  }, [dispatch]);


  if (!spotsArray) return null;

  return (
    <>
      <h2>Manage Spots</h2>
     <button><Link to={'/spots/new'}>Create new Spot</Link></button>
      {spotsArray.map((spot) => (
        <div key={spot.id}>
          <Link to={`/spots/${spot.id}`}>
          <Link to={`/spots/${spot.id}`}> <h2>{spot.name}</h2></Link>
         <img src={spot.previewImage}></img>
          <i className="fa fa-star">##{spot.city},{spot.state}</i>
          <div></div>
          <div>{spot.avgRating}</div>
         </Link> 
          <button><Link className="edit-link" to={`/spots/${spot.id}/edit`}>
            Update
          </Link></button> 
          <OpenModalButton buttonText={"Delete"} modalComponent={<DeleteSpot spot={spot}></DeleteSpot>}></OpenModalButton>
       
        </div>
      ))}
    </>
  );
};

export default GetCurrentUserSpots;
