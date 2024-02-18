import Accordian from "../Reusables/Accordian";
import SubForm from "../Reusables/SubForm";

function getHead([place, , from, to]) {
  if (from) from = from.slice(0, 4) + " to ";
  to = to.slice(0, 4) || "....";
  const Date = () => <small>{" ( " + from + to + " )"}</small>;
  return (
    <>
      {place.slice(0, 40)} <Date />
    </>
  );
}

const CondensedCard = ({
  index,
  eraseData,
  carddetails,
  handleInputChange,
}) => (
  <Accordian
    cls="fieldcard"
    eraseData={(e) => e.stopPropagation() ?? eraseData(index)}
    key={index}
    head={getHead(carddetails.map((field) => field.at(-1)))}>
    <SubForm
      inputFieldData={carddetails}
      handleInputChange={handleInputChange}
    />
  </Accordian>
);

export default CondensedCard;
