import StylishPara from "./StylishPara";

export default function InfoSection({ head, dataset, color, invert }) {
  return (
    <article className="info-section">
      <h2
        style={{
          color: color ,
          backgroundColor: invert? "black" : "gainsboro",
          textAlign: "center",
        }}>
        {head}
      </h2>
      {dataset.map((datagroup, index) => (
        <StylishPara key={index} datagroup={datagroup} />
      ))}
    </article>
  );
}
