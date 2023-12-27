import ContentTab from "./ContentTab/ContentTab";
import ControlBox from "./ControlBox/ControlBox";
import CustomizeTab from "./CustomizeTab/CustomizeTab";
import Resume from "./Resume/Resume";
import { useState } from "react";
import { personalData, educationData, experienceData } from "../assets/data";
import { useToggle } from "../assets/utils";

export default function App() {
  const [perData, setPersonal] = useState(personalData);
  const [eduData, setEduData] = useState(educationData);
  const [expData, setExpData] = useState(experienceData);
  const [activeTab, setActiveTab] = useState(1);
  const [color, setColor] = useState("#0e374e");
  const [invert, toggleInvert] = useToggle(false);
  const [layout, setLayout] = useState(`"header" "body"`);
  const [font, setFont] = useState("Open Sans");

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
      case 3:
        window.print();
    }
  }

  return (
    <>
      <section className="ui-box">
        <ControlBox activeTab={activeTab} handleClick={handleTabChange} />
        {activeTab == 0 && (
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
        )}
        {activeTab == 1 && (
          <CustomizeTab
            {...{
              color,
              layout,
              font,
              changeColor: (e) => {
                if (e.type == "click") toggleInvert();
                else setColor(e.target.value);
              },
              changeLayout: (e) => setLayout(e.target.id),
              changeFont: (e) => setFont(e.target.value),
            }}
          />
        )}
      </section>
      <Resume {...{ perData, eduData, expData, color, invert, font, layout }} />
    </>
  );
}
