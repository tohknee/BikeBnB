import { useDispatch } from "react-redux";
import {
  deleteSpotThunk,
  getCurrentUserSpotThunk,
} from "../../store/spots";


const DeleteSpot = ({ spot }) => {
  const dispatch = useDispatch();
 

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteSpotThunk(spot.id));
    dispatch(getCurrentUserSpotThunk());
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteSpot;
