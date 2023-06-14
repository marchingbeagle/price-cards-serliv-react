import "./PlansTileButton.css";

function PlansTileButton(props) {
  return <button className="plan-tile-button">{props.children}</button>;
}

export default PlansTileButton;
