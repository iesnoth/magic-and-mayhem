import React, { Fragment } from "react";
import './App.css';

import CreateUser from "./components/tutorial/CreateUser";
import ListUser from "./components/tutorial/ListUser";

function App() {
  return (
    <div>
      <Fragment>
        <CreateUser />
        <ListUser />

      </Fragment>
    </div>
  );
}

export default App;
