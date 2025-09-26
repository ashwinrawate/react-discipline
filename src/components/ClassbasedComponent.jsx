import React from "react";

class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count1: 0,
    };
  }
  render() {
    let { count, count1 } = this.state;
    return (
      <div>
        <h1>
          {/* Update the state variable */}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Inc count
          </button>
          Class Based Component {this.props.address} and count = {count} and
          next count is : {count1}
        </h1>
      </div>
    );
  }
}

export default ClassBasedComponent;
