import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const marg = props.marg;
  const margarita = marg.find((m) => m._id === id);

  const [editForm, setEditForm] = useState(margarita);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateMarg(editForm);
    props.history.push("/")
  };

  const removeMargarita = () => {
      props.deleteMarg(margarita._id)
      props.history.push("/")
  }

  return (
    <div className="marg">
      <h1>{margarita.name}</h1>
      <h2>{margarita.title}</h2>
      <img src={margarita.image} alt={margarita.name} />
      <button id="delete" onClick={removeMargarita}>DELETE</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Margarita" />
      </form>
    </div>
  );
}

export default Show;