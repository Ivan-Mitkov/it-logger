import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
    console.log("Check Use effect");
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className="container">
      <Logs />
      </div>
     
    </Fragment>
  );
};

export default App;
