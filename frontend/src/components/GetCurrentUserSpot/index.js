import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserSpotThunk } from "../../store/spots";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot";
const GetCurrentUserSpots = () => {
  const dispatch = useDispatch();
  // const spotsObj=useSelector(state=>state.spots.currentUserSpots)
  // const spotsArray=Object.values(spotsObj)//array is called 0
  const state = useSelector((state) => state);
  console.log("state.log", state);
  const spotsArray = useSelector((state) => state.spots.currentUserSpots.Spots);
  useEffect(() => {
    dispatch(getCurrentUserSpotThunk());
  }, [dispatch]);

  console.log("uuuuuuuu", spotsArray);
  // console.log('current user compoent log', spotsArray)
  if (!spotsArray) return null;

  return (
    <>
      <h2>Manage Your Spots</h2>
     <button><Link to={'/spots/new'}>Create new Spot</Link></button>
      {spotsArray.map((spot) => (
        <div key={spot.id}>
          <Link to={`/spots/${spot.id}`}> <h2>{spot.name}</h2></Link>
          <img src={spot.previewImage}></img>
          <i className="fa fa-star">##{spot.city},{spot.state}</i>
          <div></div>
          <div>{spot.avgRating}</div>
          <button><Link className="edit-link" to={`/spots/${spot.id}/edit`}>
            Update
          </Link></button> 
          <DeleteSpot spot={spot}></DeleteSpot>
        </div>
      ))}
    </>
  );
};

export default GetCurrentUserSpots;
