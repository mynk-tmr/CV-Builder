import { useToggle } from "../assets/utils";

import {
  MdKeyboardDoubleArrowUp as Up,
  MdKeyboardDoubleArrowDown as Down,
  MdDelete as Dustbin,
  MdAddCircle as AddIco,
} from "react-icons/md";

export default function Accordian({
  icon,
  head,
  children,
  eraseData,
  addData,
}) {
  const [stretch, toggleStretch] = useToggle(false);
  return (
    <section className="card accordian">
      <div className="header" onClick={toggleStretch}>
        {icon}
        {head}
        <span>
          {stretch ? <Up /> : <Down />}
          {eraseData && (
            <Dustbin size={"1.2rem"} color="darkred" onClick={eraseData} />
          )}
          {addData && (
            <AddIco
              size={"1.2rem"}
              color="green"
              onClick={(e) => {
                e.stopPropagation();
                addData();
                if (!stretch) toggleStretch();
              }}
              title="Add field"
            />
          )}
        </span>
      </div>
      {stretch && children}
    </section>
  );
}
