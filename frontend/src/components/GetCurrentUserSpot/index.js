// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getAllSpotsThunk } from "../../store/spots"
// import GetAllSpots from "../GetSpots"

// const GetCurrentUserSpot =()=>{
//     const dispatch=useDispatch()
//     const currentUser=useSelector(state=>state.)
//     const spots= useSelector(state=>Object.values(state.spots).filter(spot=>spot.ownerId===currentUser.id))
//     console.log(spots,"ASDASDASDASDASDASDS")
//     useEffect(()=>{
//         dispatch(getAllSpotsThunk())
//     },[dispatch])
    
//     return(
//         <>
//         <p>current user spot</p>
//         <GetAllSpots spots={spots}></GetAllSpots>
//         </>
//     )
// }

// export default GetCurrentUserSpot;