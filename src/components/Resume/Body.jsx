import InfoSection from "./InfoSection";

export default function Body({ eduData, expData, color, invert }) {
  return (
    <section className="body">
      <InfoSection
        head={"Education"}
        dataset={eduData}
        {...{ color, invert }}
      />
      <InfoSection
        head={"Professional Experience"}
        dataset={expData}
        {...{ color, invert }}
      />
    </section>
  );
}
