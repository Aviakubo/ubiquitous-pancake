import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [marg, setMarg] = useState(null);

  const URL = "http://localhost:4000/marg/";

  const getMarg = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMarg(data);
  };

  const createMarg = async (marg) => {
    // make post request to create margs
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marg),
    });
    // update list of margs
    getMarg();
  };

  const updateMarg = async (marg) => {
    // make post request to create margs
    await fetch(URL + marg._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marg),
    });
    // update list of margs
    getMarg();
  };

  const deleteMarg = async (id) => {
    // make post request to create margs
    await fetch(URL + id, {
      method: "delete",
    });
    // update list of margs
    getMarg();
  };

  useEffect(() => getMarg(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index marg={marg} createMarg={createMarg} />
        </Route>
        <Route
          path="/marg/:id"
          render={(rp) => (
            <Show
              marg={marg}
              updateMarg={updateMarg}
              deleteMarg={deleteMarg}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;