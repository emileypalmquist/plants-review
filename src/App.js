import React, { Component } from "react";
import PlantCard from "./PlantCard";
import "./App.css";
import PlantForm from "./PlantForm";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/plants")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data }));
  }

  toggleWatered = (plant) => {
    const updatedPlants = this.state.data.map((p) => {
      if (p.name === plant.name) {
        return {
          ...p,
          needsWater: !p.needsWater,
        };
      } else {
        return p;
      }
    });
    this.setState({ data: updatedPlants });
  };

  addPlant = (plant) => {
    this.setState({
      data: [...this.state.data, plant],
    });
  };

  render() {
    return (
      <div className="App">
        <PlantForm addPlant={this.addPlant} />
        {this.state.data.map((plant) => (
          <PlantCard
            key={Math.random() * 1000}
            plant={plant}
            toggleWatered={this.toggleWatered}
          />
        ))}
      </div>
    );
  }
}

export default App;
