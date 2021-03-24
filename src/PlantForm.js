import React, { Component } from "react";
class PlantForm extends Component {
  state = {
    name: "",
    needsWater: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleWaterToggle = (e) => {
    this.setState({
      [e.target.name]: !this.state.needsWater,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      needsWater: this.state.needsWater,
    };
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((plant) => this.props.addPlant(plant));
  };

  render() {
    const { name, needsWater } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            watered:
            <input
              type="checkbox"
              name="needsWater"
              value={needsWater}
              onChange={this.handleWaterToggle}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PlantForm;
