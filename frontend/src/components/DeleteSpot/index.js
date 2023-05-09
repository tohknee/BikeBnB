import { useDispatch } from "react-redux"
import { deleteSpotThunk } from "../../store/spots";

const DeleteSpot = ({spot})=>{
    const dispatch=useDispatch()
    console.log("asdasdsdsssssss",spot)

    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteSpotThunk(spot.id))
    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteSpot
