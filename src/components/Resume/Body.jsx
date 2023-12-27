import InfoSection from "./InfoSection";

export default function Body({ eduData, expData }) {
  return (
    <section className="body">
      <InfoSection head={"Education"} dataset={eduData} />
      <InfoSection head={"Professional Experience"} dataset={expData} />
    </section>
  );
}
