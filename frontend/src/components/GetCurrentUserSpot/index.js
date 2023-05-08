import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"
import GetAllSpots from "../GetSpots"

const GetCurrentUserSpots =({spots})=>{
    const dispatch=useDispatch()
    // const currentUserId=useSelector(state=>state.auth.user)
    // const spotsObj=useSelector(state=>state.spots.allSpots)
    // const spotsArray=Object.values(spotsObj)

    useEffect(()=>{
        dispatch(getAllSpotsThunk());
    },[dispatch])

    // const currentUserSpots=spotsArray.filter(spot=>spot.ownerId===currentUserId.id)

    // console.log(currentUserSpots,"sdadadadsada")
    // console.log(state.spots.allSpots)
    // const spots= useSelector(state=>Object.values(state.spots).filter(spot=>spot.ownerId===currentUser.id))
    // console.log(spots,"ASDASDASDASDASDASDS")
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])
    
    return(
        <>
        <p>current user spot</p>
        <h2>{spots.id}</h2>
        {/* <GetAllSpots></GetAllSpots> */}
        </>
    )
}

export default GetCurrentUserSpots;