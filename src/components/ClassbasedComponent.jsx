import React from "react";

class ClassBasedComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Based Component {this.props.address}</h1>
      </div>
    );
  }
}

export default ClassBasedComponent;
