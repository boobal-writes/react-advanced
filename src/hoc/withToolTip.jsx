import React, { Component } from "react";

const withToolTip = (Children) => {
  return class withToolTip extends Component {
    state = {
      showToolTip: false,
    };

    mouseOver = () => {
      this.setState({ showToolTip: true });
    };

    mouseOut = () => {
      this.setState({ showToolTip: false });
    };

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Children {...this.props} showToolTip={this.state.showToolTip} />
        </div>
      );
    }
  };
};

export default withToolTip;
