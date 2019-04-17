import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { completeObj } = this.props;

    return (
      <div>
        <span className="glyphicon glyphicon-shopping-cart" />
        <span>
          {" "}
          Cart <span className="badge">{completeObj.cartList.length}</span>
        </span>
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
)(Cart);
