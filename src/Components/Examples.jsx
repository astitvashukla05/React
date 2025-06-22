import TabButtons from "./TabButtons";
import { useState } from "react";
import { EXAMPLES } from "../examples";
import Section from "./Section";
import Tabs from "./Tabs";
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let content;
  if (!selectedTopic) {
    content = <p>Please Select a topic</p>;
  } else {
    content = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs buttonsContainer="menu"
        buttons={
          <>
            <TabButtons
              isactive={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isactive={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isactive={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isactive={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              States
            </TabButtons>
          </>
        }
        id="tab-content"
      >
        {content}
      </Tabs>
    </Section>
  );
}
export default Examples;
