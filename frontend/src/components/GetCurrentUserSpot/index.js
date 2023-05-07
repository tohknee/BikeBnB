import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpotsThunk } from "../../store/spots"
import GetAllSpots from "../GetSpots"

const GetCurrentUserSpot =()=>{
    const dispatch=useDispatch()
    const spots=useSelector(state=>Object.values(state.spots))
    console.log(spots,"ASDASDASDASDASDASDS")
    useEffect(()=>{
        dispatch(getAllSpotsThunk())
    },[dispatch])
    
    return(
        <>
        <p>current user spot</p>
        </>
    )
}

export default GetCurrentUserSpot;