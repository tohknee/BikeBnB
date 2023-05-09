import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteSpotThunk, getSpotThunk } from "../../store/spots"
import { Link } from "react-router-dom"


const SpotIndexItem=()=>{
    const dispatch=useDispatch()
    const {spotId}= useParams()
    const spot = useSelector(state=>state.spots[spotId])
 
    console.log("jhfjhggh",spot,"ssa÷dasdaad")
    
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))
    },[dispatch,spotId])
    
    const handleDelete=e=>{
        e.preventDefault();
        dispatch(deleteSpotThunk())
    }

    //conditional render until spot is not undefined. initial render is undefined
    if(!spot){
        return null
    }
    return (
        <div>
    <h2>SpotName:{spot.name}</h2>
    <p>address{spot.address},state{spot.state},country{spot.country}</p>
    <div>Images div</div>
    <div>Hosted by firstname last </div>
    {/* {spot.map(spot=>(
        <div>SpotImage</div>
    ))} */}
    
    <li>
    <div className="li-contents-flex">
      <Link to={`/spots/${spot.id}`}>Spot #{spot.id}</Link>
      <div className="buttons-container">
      {/* <Link className="edit-link" to={`/spots/${spot.id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button> */}
      </div>
    </div>
  </li>
        </div>
    )
}

export default SpotIndexItem