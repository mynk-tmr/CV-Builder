export default function StylishPara({ datagroup }) {
  const [place, role, from, to, location, jobdesc] = datagroup.map((field) =>
    field.at(-1)
  );

  return (
    <p className="stylishpara">
      <span>
        {from} to {to || "present"}
        <br />
        {location}
      </span>
      <span>
        <b>{role}</b>
        <i>{place}</i>
        <blockquote>{jobdesc}</blockquote>
      </span>
    </p>
  );
}
