import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserSpotThunk } from "../../store/spots"

const GetCurrentUserSpots =()=>{
    const dispatch=useDispatch()
    // const spotsObj=useSelector(state=>state.spots.currentUserSpots)
    // const spotsArray=Object.values(spotsObj)//array is called 0
    const spotsObj=useSelector(state=>state.spots.currentUserSpots.Spots)
    useEffect(()=>{
        dispatch(getCurrentUserSpotThunk());
    },[dispatch])

    // console.log('uuuuuuuu',spotsObj)
    // console.log('current user compoent log', spotsArray)
    if(!spotsObj) return null;
    return(
        <>
        <p>current user spot</p>
        {spotsObj.map(spot=>(
        
            <div key={spot.id}>
                <h2>{spot.name}</h2>
                <div>spots</div>
            </div>
        ))}
        </>
    )
}

export default GetCurrentUserSpots;