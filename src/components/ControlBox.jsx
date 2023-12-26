import * as icons from "react-icons/md";

export default function ControlBox({ activeTab, handleClick }) {
  const controls = [
    [icons["MdEditDocument"], "Content"],
    [icons["MdDesignServices"], "Customize"],
    [icons["MdDelete"], "Reset"],
    [icons["MdPrint"], "Print / Get PDF"],
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
