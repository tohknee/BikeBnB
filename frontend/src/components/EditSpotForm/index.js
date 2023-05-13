import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSpotThunk, getSpotThunk } from "../../store/spots";
import SpotForm from "../SpotForm";

const EditSpotForm = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector((state) => state.spots[spotId]); //normalized
  console.log("spoot", spot); 

  useEffect(() => {
    dispatch(getSpotThunk(spotId));
  }, [dispatch, spotId]);
  if (!spot) return null;
  return (
    <>
      <SpotForm spot={spot} formType="Update your spot"></SpotForm>
    </>
  );
};
export default EditSpotForm;
