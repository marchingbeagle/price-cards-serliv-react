import "./NavHeaderButton.css";

function NavHeaderButton(props) {
  return <button className="button">{props.children}</button>;
}

export default NavHeaderButton;
