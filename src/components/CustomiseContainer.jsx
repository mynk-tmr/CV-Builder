import ColorPicker from "./ColorPicker";
import LayoutPicker from "./LayoutPicker";

const CustomiseContainer = () => {
  return (
    <section className="*:mb-4 *:py-3 *:px-6 *:bg-white *:border *:border-gray-300 *:rounded-md *:shadow-sm *:flex *:flex-wrap *:gap-x-6 *:w-[48ch]">
      <ColorPicker />
      <LayoutPicker />
    </section>
  );
};

export default CustomiseContainer;
