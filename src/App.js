import React, { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import AddBtn from "./components/layout/AddBtn";

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
    console.log("Check Use effect");
  });
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar></SearchBar>
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
    </Provider>
  );
};

export default App;
