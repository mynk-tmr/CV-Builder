import StylishPara from "./StylishPara";

export default function InfoSection({ head, data, color, invert }) {
  return (
    <article>
      <h2
        className={`text-center font-semibold text-xl ${
          invert ? "bg-gray-950" : "bg-gray-300"
        }`}
        style={{ color }}>
        {head}
      </h2>
      {data.map((atom, index) => (
        <StylishPara key={index} atom={atom} />
      ))}
    </article>
  );
}
