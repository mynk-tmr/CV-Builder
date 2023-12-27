export default function StylishPara({ datagroup }) {
  const [place, role, from, to, location, jobdesc] = datagroup.map((field) =>
    field.at(-1)
  );

  return (
    <p className="stylishpara">
      <span>
        <i>
          {from} to {to || "present"}
        </i>
        <span>{location}</span>
      </span>
      <span>
        <b>{role}</b>
        <i>{place}</i>
        {jobdesc && <span className="jobdesc">{jobdesc}</span>}
      </span>
    </p>
  );
}
