import "@fontsource-variable/assistant";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/arima";
import "../index.css";
import { useState } from "react";
import FormContainer from "./FormContainer";
import SideBar from "./SideBar";
import CustomiseContainer from "./CustomiseContainer";
import Resume from "./Resume/Resume";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [font, setFont] = useState("Assistant Variable");
  const [layout, setLayout] = useState("--ltr");
  const [userData, setUserData] = useState("");
  console.log(userData);
  return (
    <main style={{ fontFamily: font }} className="flex">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <FormContainer setUserData={setUserData} />}
      {activeTab === 1 && (
        <CustomiseContainer
          currentFont={font}
          layout={layout}
          changeFont={(e) => setFont(e.target.value || "Assistant Variable")}
          changeLayout={(e) => setLayout(e.target.value)}
        />
      )}
      <Resume userData={userData} />
    </main>
  );
};

export default App;
