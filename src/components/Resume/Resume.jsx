import "./resume.css";
import Header from "./Header";
import Body from "./Body";

const Resume = ({ perData, eduData, expData, color, font, layout }) => (
  <section className="resume-container" style={{gridTemplateAreas : layout}} >
    <Header
      details={perData[0].map((val) => val.at(-1))}
      style={{
        backgroundColor: color,
        fontFamily: font,
      }}
    />
    <Body/>
  </section>
);

export default Resume;
