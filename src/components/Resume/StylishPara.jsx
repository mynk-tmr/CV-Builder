export default function StylishPara({ atom }) {
  return (
    <p className="grid items-start grid-cols-[1fr_3fr] gap-4 p-4">
      <span className="grid gap-2">
        <i>
          {atom?.startedIn} to {atom?.finishedOn || "present"}
        </i>
        <span>{atom?.location}</span>
      </span>
      <span className="grid gap-1">
        <b>{atom?.title || atom?.degree}</b>
        <i>{atom?.place || atom?.school}</i>
        {atom?.description && (
          <span className="bg-yellow-100 p-2">{atom.description}</span>
        )}
      </span>
    </p>
  );
}
