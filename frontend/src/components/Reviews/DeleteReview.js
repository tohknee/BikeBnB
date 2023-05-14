import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
import { useModal } from "../../context/Modal";
import { getSpotThunk } from "../../store/spots";
// import "../../index.css"
const DeleteReview = ({ review ,spotId}) => {
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteReviewThunk(review))
    .then(closeModal);
  dispatch(getSpotThunk(spotId))
    
  };
  return (
    <div>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      <button className="delete-yes" onClick={handleDelete}>
        Yes(Delete Review)
      </button>
      <button onClick={closeModal} className="delete-no">No (Keep Review)</button>
    </div>
  );
};

export default DeleteReview;
