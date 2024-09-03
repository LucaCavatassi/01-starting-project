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

// function CoreConcept(props) {
//   return( 
//   <li>
//     <img src={props.image} alt={props.title} />
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
//   )
// }

// same code destructured
  function CoreConcept({title, image, description}) {
    return( 
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
            image={ CORE_CONCEPTS[0].image }
          />
          {/* shorter alternative */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
