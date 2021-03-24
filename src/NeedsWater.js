const NeedsWater = (props) => {
  return (
    <div
      className="NeedsWater"
      onClick={() => props.toggleWatered(props.plant)}
    >
      <h3>I'm parched</h3>
    </div>
  );
};

export default NeedsWater;
