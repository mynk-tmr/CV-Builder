import InfoSection from "./InfoSection";

export default function Body({ eduData, expData, color, invert }) {
  return (
    <section className="p-4 text-black grid gap-4">
      <InfoSection head={"Education"} data={eduData} {...{ color, invert }} />
      <InfoSection
        head={"Professional Experience"}
        data={expData}
        {...{ color, invert }}
      />
    </section>
  );
}
