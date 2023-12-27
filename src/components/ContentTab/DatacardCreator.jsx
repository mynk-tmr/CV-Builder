import CondensedCard from "./CondensedCard";

const DatacardCreator = ({ data, handleInputChange, eraseData }) => (
  <>
    {data.map((carddetails, index) => (
      <CondensedCard
        key={index}
        {...{ index, eraseData, carddetails, handleInputChange }}
      />
    ))}
  </>
);

export default DatacardCreator;
