import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
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

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  //bring whole state and destruct in props
  log: state.log
});
export default connect(mapStateToProps, { getLogs })(Logs);
