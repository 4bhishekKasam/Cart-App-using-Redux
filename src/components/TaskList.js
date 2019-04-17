import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import { Alert } from "react-bootstrap";

class TaskList extends Component {
  render() {
    const { completeObj } = this.props;

    if (completeObj.productInventory.length === 0) {
      return (
        <Alert bsStyle="danger">
          <strong>Error:</strong> No inventory is found!{" "}
        </Alert>
      );
    }

    return (
      <div className="container">
        <div className="list-group">
          {completeObj.productInventory.map((item, i) => (
            <TaskItem key={i} value={item} />
          ))}
        </div>
        <br />
        <br />
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completeObj: state.CartReducer
});

export default connect(
  mapStateToProps,
  null
)(TaskList);
