import {
  PencilIcon as Edit,
  AdjustmentsHorizontalIcon as Customize,
  ArrowPathIcon as Reset,
  PrinterIcon as Print,
} from "@heroicons/react/16/solid";

const SideBar = ({ activeTab, reset }) => {
  const buttons = [
    { Icon: Edit, text: "Content" },
    { Icon: Customize, text: "Customize" },
    { Icon: Reset, text: "Reset" },
    { Icon: Print, text: "Print" },
  ];
  function action(btnIndex) {
    if (btnIndex < 2) activeTab.signal = btnIndex;
    else if (btnIndex == 2) reset();
    else window.print();
  }
  return (
    <aside className="sticky top-4 flex flex-col pr-4 gap-y-4 h-fit *:py-2 hover:*:text-fuchsia-600 *:text-sm">
      {buttons.map(({ Icon, text }, i) => (
        <button
          key={text}
          onClick={() => action(i)}
          className={
            i === activeTab.signal ? "text-pink-600 hover:!text-pink-600" : ""
          }>
          <Icon /> {text}
        </button>
      ))}
    </aside>
  );
};

export default SideBar;
