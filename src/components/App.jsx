import "@fontsource-variable/assistant";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/arima";
import "../index.css";
import { useState } from "react";
import FormContainer from "./FormContainer";
import SideBar from "./SideBar";
import CustomiseContainer from "./CustomiseContainer";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [font, setFont] = useState("Assistant Variable");
  return (
    <main style={{ fontFamily: font }} className="flex">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <FormContainer />}
      {activeTab === 1 && (
        <CustomiseContainer
          currentFont={font}
          changeFont={(e) => setFont(e.target.value || "Assistant Variable")}
        />
      )}
    </main>
  );
};

export default App;
