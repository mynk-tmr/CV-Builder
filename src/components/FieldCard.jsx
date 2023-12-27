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

const FieldCard = ({ data, handleInputChange, eraseData }) => (
  <>
    {data.map((subdata, index) => (
      <section key={index} className="fieldcard">
        <Accordian
          eraseData={(e) => e.stopPropagation() ?? eraseData(index)}
          key={index}
          head={console.log(subdata) ?? "New Field"}>
          <Details
            inputFieldData={subdata}
            handleInputChange={handleInputChange}
          />
        </Accordian>
      </section>
    ))}
  </>
);

export default FieldCard;
