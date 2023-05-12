import { useDispatch } from "react-redux";
import {
  deleteSpotThunk,
  getSpotThunk,
  getCurrentUserSpotThunk,
} from "../../store/spots";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DeleteSpot = ({ spot }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("asdasdsdsssssss", spot);

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
