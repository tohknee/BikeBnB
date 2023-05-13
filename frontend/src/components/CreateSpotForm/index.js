import SpotForm from "../SpotForm";

//create spot component
const CreateSpot = () => {
  const spot = {
    country: "",
    address: "",
    city: "",
    state: "",
    description: "",
    name: "",
    price: "",
    previewImage: "",
    imageUrl: "",
    lat:'',
    lng:''
  };

  return (
    <>
      <SpotForm spot={spot} formType="Create a New Spot"></SpotForm>
    </>
  );
};

export default CreateSpot;
