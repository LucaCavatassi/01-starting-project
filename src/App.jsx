import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic , setSelectedTopic] = useState("components");

  // console.log("app execution"); with this you can see that app it's re-executed
  
  function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic);
        
      }


  return (
    <div>
      <main>
        <Header />

        {/* CARDS */}
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

        {/* EXAMPLES */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton click={() => handleClick("components")} > Components </TabButton>
            <TabButton click={() => handleClick("jsx")} > JSX </TabButton>
            <TabButton click={() => handleClick("props")} > Props </TabButton>
            <TabButton click={() => handleClick("state")} > State </TabButton>
          </menu>
          {/* Dynamic Content */}
          <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code} 
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
