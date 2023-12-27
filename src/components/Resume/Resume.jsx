import "./resume.css";
import Header from "./Header";
import Body from "./Body";

const Resume = ({ perData, eduData, expData, color, font, layout }) => (
  <section
    className="resume-container"
    style={{ gridTemplateAreas: layout, fontFamily: font }}>
    <Header
      details={perData[0].map((val) => val.at(-1))}
      style={{ backgroundColor: color }}
    />
    <Body {...{ eduData, expData }} />
  </section>
);

export default Resume;
