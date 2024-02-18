import {
  PencilIcon as Edit,
  AdjustmentsHorizontalIcon as Customize,
  ArrowPathIcon as Reset,
  PrinterIcon as Print,
} from "@heroicons/react/16/solid";

const SideBar = ({ activeTab, setActiveTab }) => {
  const buttons = [
    { Icon: Edit, text: "Content" },
    { Icon: Customize, text: "Customize" },
    { Icon: Reset, text: "Reset" },
    { Icon: Print, text: "Print" },
  ];
  return (
    <aside className="flex flex-col pr-4 gap-y-4 h-fit *:py-2 hover:*:text-fuchsia-600 *:text-sm">
      {buttons.map(({ Icon, text }, i) => (
        <button
          key={text}
          onClick={() => setActiveTab(i)}
          className={
            i === activeTab ? "text-pink-600 hover:!text-pink-600" : ""
          }>
          <Icon /> {text}
        </button>
      ))}
    </aside>
  );
};

export default SideBar;
