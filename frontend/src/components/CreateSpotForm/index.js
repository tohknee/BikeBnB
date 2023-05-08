
import SpotForm from "../SpotForm"


const CreateSpot = ()=> {

    const spot= {
        country:'',
        address:'',
        city:'',
        state:'',
        description:'',
        name:'',
        price:'',
        previewImage:'',
        imageUrl:'',
        // lat:'',
        // lng:''
    }

    return (
        <>
        <SpotForm spot={spot} formType='Create Spot'></SpotForm>
        </>
    )
}

export default CreateSpot;