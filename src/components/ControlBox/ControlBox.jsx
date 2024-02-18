import {
  PencilIcon as Edit,
  AdjustmentsHorizontalIcon as Customize,
  ArrowPathIcon as Reset,
  PrinterIcon as Print,
} from "@heroicons/react/16/solid";

export default function ControlBox({ activeTab, handleClick }) {
  const controls = [
    [Edit, "Content"],
    [Customize, "Customize"],
    [Reset, "Reset"],
    [Print, "Print / Get PDF"],
  ];
  return (
    <menu className="card controlbtns">
      {controls.map(([Icon, text], index) => (
        <li
          onClick={() => handleClick(index)}
          className={
            text.match("Reset")
              ? "resetbtn"
              : index == activeTab
              ? "activebtn"
              : null
          }
          key={index}>
          <Icon />
          {text}
        </li>
      ))}
    </menu>
  );
}
