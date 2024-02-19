import "@fontsource-variable/assistant";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/arima";
import "../index.css";
import { useState } from "react";
import { personal, education, experience } from "../config/data";
import FormContainer from "./FormContainer";
import SideBar from "./SideBar";
import CustomiseContainer from "./CustomiseContainer";
import Resume from "./Resume/Resume";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [font, setFont] = useState("Assistant Variable");
  const [layout, setLayout] = useState("--tb");
  const [userData, setUserData] = useState({
    personal,
    education,
    experience,
  });
  return (
    <main style={{ fontFamily: font }} className="flex relative">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="grow">
        {activeTab === 0 && (
          <FormContainer userData={userData} setUserData={setUserData} />
        )}
        {activeTab === 1 && (
          <CustomiseContainer
            currentFont={font}
            layout={layout}
            changeFont={(e) => setFont(e.target.value || "Assistant Variable")}
            changeLayout={(e) => setLayout(e.target.value)}
          />
        )}
      </section>
      <Resume userData={userData} />
    </main>
  );
};

export default App;
