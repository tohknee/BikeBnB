import { useDispatch } from "react-redux";
import {
  deleteSpotThunk,
  getCurrentUserSpotThunk,
} from "../../store/spots";
import { useModal } from "../../context/Modal";

const DeleteSpot = ({ spot }) => {
  const dispatch = useDispatch();
  const {closeModal}=useModal()

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteSpotThunk(spot.id));
    dispatch(getCurrentUserSpotThunk());
    closeModal()
  };
console.log('dooooes this work?',spot)
  return (
    <div>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this spot?</p>
      <button onClick={handleDelete} className="delete-yes">Yes(Delete Spot)</button>
      <button onClick={closeModal}className="delete-no">No(Keep Spot)</button>
    </div>
  );
};

export default DeleteSpot;
