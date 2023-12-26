import ContentTab from "./ContentTab";
import ControlBox from "./ControlBox";
import { useState } from "react";
import { personalData, educationData, experienceData } from "../assets/data";

export default function App() {
  const [perData, setPersonal] = useState(personalData);
  const [eduData, setEduData] = useState(educationData);
  const [expData, setExpData] = useState(experienceData);
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(tab) {
    if (tab === activeTab) return;
    switch (tab) {
      case 0:
        setActiveTab(0);
        break;
      case 1:
        setActiveTab(1);
        break;
      case 2:
        setPersonal(personalData);
        setEduData(educationData);
        setExpData(experienceData);
        setActiveTab(0);
        break;
    }
  }

  return (
    <>
      <ControlBox activeTab={activeTab} handleClick={handleTabChange} />
      {activeTab == 0 && (
        <>
          <ContentTab
            {...{
              perData,
              setPersonal,
              eduData,
              setEduData,
              expData,
              setExpData,
            }}
          />
        </>
      )}
    </>
  );
}
