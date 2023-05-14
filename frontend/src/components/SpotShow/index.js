import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SpotIndex = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector((state) => state.spots.allSpots); //create spots object
  const spotsArray = Object.values(spotsObj); //this is a spots array

  //
  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Spots List</h1>
    
      {spotsArray.map((spot) => (
          <Link  to={`/spots/${spot.id}`}>
            <h2>{spot.name}</h2>
          <img src={spot.previewImage} alt="spot Image"></img>
          <h3>
            {spot.city},{spot.state}
          </h3>
          <h4>${spot.price} Night</h4>
          <i className="fa fa-star">{spot.avgRating? spot.avgRating?.toFixed(1):"New"}</i>
          </Link>
      ))}
    </>
  );
};

export default SpotIndex;
