import React from "react";

class MyComponent extends React.Component {
  //key: value
  state = {
    name: "Duy",
    age: 21,
  };

  /**
   * JSX => return block
   * fragment
   */
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    // let name = "Duy";

    return (
      <div className="abc">
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          {console.log("My name is: ", this.state.name)} Hello my Component, my
          name is {this.state.name}
        </div>
        <div className="second">I {this.state.age} year old</div>
      </div>
    );
  }
}

export default MyComponent;

// export default function MyComponent() {
//   return <div>Hello MyComponent</div>;
// }
