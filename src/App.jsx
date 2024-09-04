import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic , setSelectedTopic] = useState("");

  // console.log("app execution"); with this you can see that app it's re-executed
  
  function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
      }
  
  let tabContent = <p> Please select a topic. </p>

  if (selectedTopic) {
    tabContent = <div id="tab-content">
                  <h3> {EXAMPLES[selectedTopic].title} </h3>
                  <p>{EXAMPLES[selectedTopic].description} </p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code} 
                    </code>
                  </pre>
                </div> 
  }

  return (
    <>
      <Header />
      <main>

        {/* CARDS */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} /> )}
          </ul>
        </section>

        {/* EXAMPLES */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"}  click={() => handleClick("components")} > Components </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"}  click={() => handleClick("jsx")} > JSX </TabButton>
            <TabButton isSelected={selectedTopic === "props"}  click={() => handleClick("props")} > Props </TabButton>
            <TabButton isSelected={selectedTopic === "state"}  click={() => handleClick("state")} > State </TabButton>
          </menu>
          {/* Dynamic Content */}
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
