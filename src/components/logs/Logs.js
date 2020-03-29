import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };
  if (loading) {
    return <Preloader/>;
  }
  const renderLogs = () => {
    let logsToShow;
    if (!loading && logs.length === 0) {
      logsToShow = <p className="center">No logs to show</p>;
    } else {
      logsToShow = logs.map(log => <LogItem key={log.id} log={log}></LogItem>);
    }
    return logsToShow;
  };
  let logsToShow = renderLogs();

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {logsToShow}
    </ul>
  );
};

export default Logs;
