import React from "react";

class ReactForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
  };

  render() {
    console.log(">>>> call render", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label> <br />
          <input
            type="text"
            id="fname"
            value={this.state.firstname}
            onChange={(event) => {
              this.handleChangeFirstName(event);
            }}
          />{" "}
          <br />
          <label htmlFor="lname">Last name:</label> <br />
          <input
            type="text"
            id="lname"
            value={this.state.lastname}
            onChange={(event) => {
              this.handleChangeLastName(event);
            }}
          />{" "}
          <br />
          <br />
          <button
            type="button"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default ReactForm;
