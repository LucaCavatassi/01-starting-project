import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton> Components </TabButton>
          </menu>
        </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
