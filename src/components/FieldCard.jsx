import Accordian from "./Accordian";
import Details from "./Details";

function getHead([title, , from, to]) {
  if (from) from = from.slice(0, 4) + " to ";
  to = to.slice(0, 4) || "....";
  const Date = () => <small>{" ( " + from + to + " )"}</small>;
  return (
    <>
      {title.slice(0, 40)} <Date />
    </>
  );
}

export default function FieldCard({ data, handleInputChange, eraseData }) {
  return (
    <section className="education">
      {data.map((subdata, index) => (
        <Accordian
          eraseData={(e) => e.stopPropagation() ?? eraseData(index)}
          key={index}
          head={getHead(subdata.map((fd) => fd[2]))}>
          <Details
            inputFieldData={subdata}
            handleInputChange={handleInputChange}
          />
        </Accordian>
      ))}
    </section>
  );
}
