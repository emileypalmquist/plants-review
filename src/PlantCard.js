import NeedsWater from "./NeedsWater";
import NoMoreWater from "./NoMoreWater";

const PlantCard = (props) => {
  const waterCheck = () => {
    if (props.plant.needsWater) {
      return (
        <NeedsWater toggleWatered={props.toggleWatered} plant={props.plant} />
      );
    } else {
      return (
        <NoMoreWater toggleWatered={props.toggleWatered} plant={props.plant} />
      );
    }
  };

  return (
    <div className="plantCard">
      <h1>{props.plant.name}</h1>
      {waterCheck()}
      {/* {props.plant.needsWater ? "parched" : "not thirsty"} */}
    </div>
  );
};

export default PlantCard;
