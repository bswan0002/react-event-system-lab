import React, { Component } from "react";

class Keypad extends Component {
  state = {};
  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={() => console.log("Entering password...")}
        />
      </div>
    );
  }
}

export default Keypad;
