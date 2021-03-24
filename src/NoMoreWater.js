const NoMoreWater = (props) => {
  return (
    <div
      className="NoMoreWater"
      onClick={() => props.toggleWatered(props.plant)}
    >
      <h3>I'm drowning</h3>
    </div>
  );
};

export default NoMoreWater;
