import StylishPara from "./StylishPara";

export default function InfoSection({ head, dataset }) {
  return (
    <article className="info-section">
      <h2>{head}</h2>
      {dataset.map((datagroup, index) => (
        <StylishPara key={index} datagroup={datagroup} />
      ))}
    </article>
  );
}
