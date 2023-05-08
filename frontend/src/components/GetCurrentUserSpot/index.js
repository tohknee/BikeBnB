import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"
import GetAllSpots from "../GetSpots"

const GetCurrentUserSpots =()=>{
    const dispatch=useDispatch()
    const currentUserSpots=useSelector(state=>state.spots.allSpots)
    console.log(currentUserSpots,"sdadadadsada")
    // console.log(state.spots.allSpots)
    // const spots= useSelector(state=>Object.values(state.spots).filter(spot=>spot.ownerId===currentUser.id))
    // console.log(spots,"ASDASDASDASDASDASDS")
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])
    
    return(
        <>
        <p>current user spot</p>
        <GetAllSpots></GetAllSpots>
        </>
    )
}

export default GetCurrentUserSpots;