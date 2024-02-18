import { useState } from "react";
import FormContainer from "./FormContainer";
import SideBar from "./SideBar";
import CustomiseContainer from "./CustomiseContainer";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="flex">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <FormContainer />}
      {activeTab === 1 && <CustomiseContainer />}
    </main>
  );
};

export default App;
