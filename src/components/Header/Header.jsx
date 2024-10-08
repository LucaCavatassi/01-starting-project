import "./Header.css";
import img from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// random index generator
function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1))
};

export default function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
