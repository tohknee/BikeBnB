import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import SpotForm from "../SpotForm"


const createSpot = ()=> {

    const spot= {
        country:'',
        address:'',
        city:'',
        state:'',
        description:'',
        spotName:'',
        price:'',
        previewImageUrl:'',
        imageUrl:'',
        lat:'',
        lng:''
    }
    return (
        <>
        <SpotForm spot={spot} formType='Create Spot'></SpotForm>
        
        </>
    )
}

export default createSpot;