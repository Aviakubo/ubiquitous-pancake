import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createMarg(newForm);
    setNewForm({
      name: "",
      instructions: "",
      ingredients: "",
      yield: "",
      image: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.marg.map((marg) => (
      <div key={marg._id} className="marg">
        <Link to={`/marg/${marg._id}`}><h1>{marg.name}</h1></Link>
        <img src={marg.image} alt={marg.name} />
        <h3>{marg.image}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.yield}
          name="yield"
          placeholder="yield"
          onChange={handleChange}
        />
        <input
          type="ingredients"
          value={newForm.ingredients}
          name="ingredients"
          placeholder="ingredients"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.instructions}
          name="instructions"
          placeholder="instructions"
          onChange={handleChange}
        />
        <input type="submit" value="Create Margarita" />
      </form>
      {props.marg ? loaded() : loading()}
    </section>
  );
}

export default Index;