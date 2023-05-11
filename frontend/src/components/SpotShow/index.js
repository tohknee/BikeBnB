import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"
import { Link } from "react-router-dom/cjs/react-router-dom.min"



const SpotIndex = ()=> {
    const dispatch=useDispatch()
    const spotsObj= useSelector(state=> state.spots.allSpots)//create spots object
    const spotsArray = Object.values(spotsObj) //this is a spots array

    //
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])

    console.log("spots array information", spotsArray)
    return (
        <>
        <h1>Spots List</h1>
        {spotsArray.map(spot=>(
            <div key={spot.id}>
                <Link to={`/spots/${spot.id}`}>
                <h2>{spot.name}</h2>
                </Link>
                <img src={spot.previewImage} alt='spot Image'></img>
                <h3>{spot.city},{spot.state}</h3>
                <h4>${spot.price} per night</h4>
                <h5>StarRAting{spot.rating}</h5>
            
            </div>
        ))}
        </>
    )}

    export default SpotIndex