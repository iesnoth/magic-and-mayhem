import React, { Fragment } from "react";
import './App.css';

import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";

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
