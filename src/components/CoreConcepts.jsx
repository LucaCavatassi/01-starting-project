import CoreConcept from "./CoreConcepts/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="CoreConcepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
