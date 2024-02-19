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
  const activeTab = useSignal(1);
  const font = useSignal("Arima Variable");
  const layout = useSignal("--tb");
  const color = useSignal("#1a34ff");
  const invert = useSignal(false);
  const userData = useSignal({
    personal,
    education,
    experience,
  });

  return (
    <main style={{ fontFamily: font.signal }} className="flex relative">
      <SideBar activeTab={activeTab} />
      <section className="grow">
        {activeTab.signal === 0 && <FormContainer userData={userData} />}
        {activeTab.signal === 1 && (
          <CustomiseContainer {...{ font, layout, color, invert }} />
        )}
      </section>
      <Resume {...{ userData, layout, color, invert }} />
    </main>
  );
};

export default App;
