import { useDispatch } from "react-redux";
import {
  deleteSpotThunk,
  getCurrentUserSpotThunk,
} from "../../store/spots";
import { useModal } from "../../context/Modal";
import "./deleteSpot.css"

const DeleteSpot = ({ spot }) => {
  const dispatch = useDispatch();
  const {closeModal}=useModal()

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteSpotThunk(spot.id));
    dispatch(getCurrentUserSpotThunk());
    closeModal()
  };

  return (
    <div className="whole-delete">
      <h2 className="remove-space">Confirm Delete</h2>
      <p className="remove-space">Are you sure you want to remove this spot?</p>
      <div className="deletes">

      <button onClick={handleDelete} className="delete-yes">Yes(Delete Spot)</button>
      <button onClick={closeModal}className="delete-no">No(Keep Spot)</button>
      </div>
    </div>
  );
};

export default DeleteSpot;
