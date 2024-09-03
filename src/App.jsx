import img from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// random index generator
function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1))
};

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description }  React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return( 
  <li>
    <img src={props.img} alt="" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={ CORE_CONCEPTS[0].title }
            description={ CORE_CONCEPTS[0].description } 
            img={ CORE_CONCEPTS[0].image }
          />
          <CoreConcept 
            title={ CORE_CONCEPTS[1].title }
            description={ CORE_CONCEPTS[1].description } 
            img={ CORE_CONCEPTS[1].image }
          />
          <CoreConcept 
          title={ CORE_CONCEPTS[2].title }
          description={ CORE_CONCEPTS[2].description } 
          img={ CORE_CONCEPTS[2].image }
        />
        <CoreConcept 
        title={ CORE_CONCEPTS[3].title }
        description={ CORE_CONCEPTS[3].description } 
        img={ CORE_CONCEPTS[3].image }
      />
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
