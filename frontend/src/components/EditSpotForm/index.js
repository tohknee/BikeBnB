import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {editSpotThunk, getSpotThunk} from '../../store/spots'
import SpotForm from "../SpotForm"

const EditSpotForm = ()=>{
    const dispatch=useDispatch()
    const {spotId} = useParams()
    const spot = useSelector(state=>state.spots[spotId])//normalized
    console.log('spoot',spot)//{}
    
    useEffect(()=>{
        // console.log("spotttt in useEffecy===", spot)

        dispatch(getSpotThunk(spotId))
        // console.log("spotttt in dispatch===", spot)

    },[dispatch,spotId])
    if(!spot) return null;
    return (
        <>
        <p>EDIT SPOT #{spotId}</p>
        <SpotForm spot={spot} formType="Edit Spot"></SpotForm>
        </>
    )
}
export default EditSpotForm