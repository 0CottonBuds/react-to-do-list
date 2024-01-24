// Header/ nav bar/ logo
import reactLogo from "../assets/react.png";

export default function Header() {
  return (
    <header className="heading">
      <div className="heading-logo-container">
        <img className="heading-logo" src={reactLogo}></img>
      </div>
      <p className="heading-title">To-React</p>
    </header>
  );
}
