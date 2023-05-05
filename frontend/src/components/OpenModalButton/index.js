// frontend/src/components/OpenModalButton/index.js
import React from "react";
import { useModal } from "../../context/Modal";

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === "function") onButtonClick();
    if (typeof onModalClose === "function") setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return <button onClick={onClick}>{buttonText}</button>;
}

export default OpenModalButton;

// const Greeting = () => {
//     return (
//       <OpenModalButton
//         buttonText="Greeting"
//         modalComponent={<h2>Hello World!</h2>}
//         onButtonClick={() => console.log("Greeting initiated")}
//         onModalClose={() => console.log("Greeting completed")}
//       />
//     );
//   };
//   The Greeting component will render a button element that, when clicked, will trigger
//    a modal with an h2 element of "Hello World!" and will print "Greeting initiated" to 
//    the console logs. When the modal is closed, it will print "Greeting completed" to 
//    the console logs.