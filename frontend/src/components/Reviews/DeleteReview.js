import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
import { useModal } from "../../context/Modal";
import { getSpotThunk } from "../../store/spots";

const DeleteReview = ({ review ,spotId}) => {
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteReviewThunk(review)).then(closeModal);
  dispatch(getSpotThunk(spotId))
    
  };
  return (
    <div>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      <button onClick={handleDelete}>
        Yes(Delete Review)make red
      </button>
      <button onClick={closeModal}>No (Keep Review)make grey</button>
    </div>
  );
};

export default DeleteReview;
