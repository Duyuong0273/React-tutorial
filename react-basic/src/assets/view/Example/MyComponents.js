import React from "react";

class MyComponent extends React.Component {
  //key: value
  state = {
    name: "",
    age: 21,
  };

  /**
   * JSX => return block
   * fragment
   */
  handleOnChangeName = (event) => {
    //merge
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    console.log("hit the button");
    alert("click me");
  };

  // re-render
  render() {
    // let name = "Duy";
    console.log(">>> call render: ", this.state);
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
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            Click me !
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;

// export default function MyComponent() {
//   return <div>Hello MyComponent</div>;
// }
