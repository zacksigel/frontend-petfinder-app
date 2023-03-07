import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShowPet = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const pet = props.selectedPet;


  const [comment, addComment] = useState({
    comment: "",
  });

  // comment feature needs option to edit and delete comment too

  const handleChange = (event) => {
    addComment((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    props.updatePetComment(comment, pet._id);
  };

  const handleDeleteComment = () => {
    props.deletePetComment(pet._id);
    navigate("/");
  };

  const handleDeletePet = () => {
    props.deletePet(pet._id);
    navigate("/");
  };

return (
<<<<<<< HEAD
    <div class='showPet'>
      <h1 class='showPetName'>{pet.name}</h1>
=======
    <div>
      <h1>{pet.name}</h1>
      <img src={pet.photos[0].medium} alt={pet.name} />
      <p>{pet.description}</p>
      <p>{pet.breed}</p>
      <p>{pet.age}</p>

>>>>>>> 2d25a1c2a37cad99568e584c8902c51b6d009173
    </div>
  )
}

export default ShowPet