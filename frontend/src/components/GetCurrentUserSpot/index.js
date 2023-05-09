import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserSpotThunk } from "../../store/spots"
import { deleteSpotThunk } from "../../store/spots"
import { Link } from "react-router-dom"
import DeleteSpot from "../DeleteSpot"
const GetCurrentUserSpots =()=>{
    const dispatch=useDispatch()
    // const spotsObj=useSelector(state=>state.spots.currentUserSpots)
    // const spotsArray=Object.values(spotsObj)//array is called 0
    const spotsArray=useSelector(state=>state.spots.currentUserSpots.Spots)
    useEffect(()=>{
        dispatch(getCurrentUserSpotThunk());
    },[dispatch])

    console.log('uuuuuuuu',spotsArray)
    // console.log('current user compoent log', spotsArray)
    if(!spotsArray) return null;

    // const handleDelete=e=>{
    //     e.preventDefault();
    //     dispatch(deleteSpotThunk(spotsArray))
    // }
    return(
        <>
        <p>current user spot</p>
        {spotsArray.map(spot=>(
  
            <div key={spot.id}>
                <h2>{spot.name}</h2>
                <div>spots</div>
                <Link className="edit-link" to={`/spots/${spot.id}/edit`}>Edit</Link>
                <DeleteSpot spot={spot}></DeleteSpot>
        {/* <button onClick={handleDelete}>Delete</button> */}
            </div>
        ))}
        </>
    )
}

export default GetCurrentUserSpots;