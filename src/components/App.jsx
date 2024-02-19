import "@fontsource-variable/assistant";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/arima";
import "../index.css";
import { personal, education, experience } from "../config/data";
import FormContainer from "./FormContainer";
import SideBar from "./SideBar";
import CustomiseContainer from "./CustomiseContainer";
import Resume from "./Resume/Resume";
import useSignal from "./hooks/useSignal";
import { useState } from "react";

const App = () => {
  const activeTab = useSignal(0);
  const font = useSignal("Arima Variable");
  const layout = useSignal("--tb");
  const color = useSignal("#1a34ff");
  const invert = useSignal(false);
  const userData = useSignal({
    personal,
    education,
    experience,
  });
  const shouldReset = useSignal(false);

  function reset() {
    userData.signal = {
      personal,
      education,
      experience,
    };
    shouldReset.signal = true;
  }

  return (
    <main style={{ fontFamily: font.signal }} className="flex relative">
      <section className="w-[96rem] mr-8 flex print:hidden">
        <SideBar {...{ activeTab, reset }} />
        {activeTab.signal === 0 && (
          <FormContainer {...{ shouldReset, userData }} />
        )}
        {activeTab.signal === 1 && (
          <CustomiseContainer {...{ font, layout, color, invert }} />
        )}
      </section>
      <Resume {...{ userData, layout, color, invert }} />
    </main>
  );
};

export default App;
