import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"

const GetAllSpots = ()=> {
    const dispatch=useDispatch()
    const spotsObj= useSelector(state=> state.spots.allSpots)//create spots object
    const spotsArray = Object.values(spotsObj) //this is a spots array
    console.log('label',spotsArray)
    console.log('spot.name', spotsArray[0].address)
    console.log(spotsArray,"sdasdasa")
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])
    return (
        <>
        <h1>Spots List</h1>
        {spotsArray.map(spot=>(
            <div key={spot.id}>
                <h2>{spot.name}</h2>
                <img src={spot.previewImage} alt='spot Image'></img>
                <h3>{spot.city},{spot.state}</h3>
                <h4>${spot.price} per night</h4>
                <h5>StarRAting{spot.rating}</h5>
            </div>
        ))}
        </>
    )}

    export default GetAllSpots