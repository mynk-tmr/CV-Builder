import "./resume.css";
import Header from "./Header";
import Body from "./Body";

const Resume = ({ userData, color, invert, layout }) => {
  let { personal = [], education = [], experience = [] } = userData.signal;
  personal = personal[0];
  let direction = {
    "--tb": "flex-col",
    "--ltr": "flex-row",
    "--rtl": "flex-row-reverse",
  }[layout.signal];

  return (
    <section
      className={`
      grow transition-all self-start sticky top-4 py-3 px-6
      bg-white border border-gray-300 rounded-md shadow-sm
      flex ${direction}
      print:fixed print:print-exact print:border-none
    `}>
      <Header bg={color.signal} invert={invert.signal} data={personal} />
      <Body
        eduData={education}
        expData={experience}
        color={color.signal}
        invert={invert.signal}
      />
    </section>
  );
};

export default Resume;
