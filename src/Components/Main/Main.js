import "../Main/main.css";
import { Section, Calltoaction } from "../Main/Section";
import { info } from "../../Utilities/information";

export function Main() {
  return (
    <main className="main-container">
      {Object.values(info).map((section, i) => {
        return (
          <Section
            title={section.title}
            paragraph={section.paragraph}
            invert={section.invert}
            img={section.img}
          />
        );
      })}
      <Calltoaction />
    </main>
  );
}
