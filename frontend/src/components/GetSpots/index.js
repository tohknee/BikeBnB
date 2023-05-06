import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"

const GetAllSpots = ()=> {
    const dispatch=useDispatch()
    const spots= useSelector(state=> Object.values(state.spots))
    console.log('label',spots)
    
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])
    return (
        <>
        <h1>Spots List</h1>
        {spots?.map(spot=>(
            <div key={spot.id}>
                <h2>{spot.name}</h2>
                <img src={spot.previewImage} alt='spot Image'></img>
                <h3>City,State</h3>
                <h4>$123.34night</h4>
                <h5>StarRAting</h5>
            </div>
        ))}
        </>
    )}

    export default GetAllSpots