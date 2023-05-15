import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"
const SpotIndex = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector((state) => state.spots.allSpots); //create spots object
  const spotsArray = Object.values(spotsObj); //this is a spots array

  //
  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   // This effect will re-run whenever spotsArray changes
  //   if (!spotsArray) return;
  //   console.log("spotsArray updated:", spotsArray);
  // }, [spotsArray]);
  
  if(!spotsArray) return null
  return (
    <>
    <div className="all-spots-container" >

      {spotsArray.map((spot) => (
        <Link  to={`/spots/${spot.id}`} className="spot-tile" title={spot.name}>
          <img src={spot.previewImage} alt="spot Image"></img>
          <div className="top-line">
          <h3>
            {spot.city},{spot.state}
          </h3>
          <i className="fa fa-star">{spot.avgRating? spot.avgRating?.toFixed(1):"New"}</i>
          </div>
          <h4>${spot.price} Night</h4>
          </Link>
      ))}
      </div>
    </>
  );
};

export default SpotIndex;
