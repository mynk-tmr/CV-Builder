import { educationData, experienceData } from "../../assets/data";
import Accordian from "../Reusables/Accordian";
import Details from "../Reusables/Details";
import DatacardCreator from "./DatacardCreator";
import {
  handleCreator,
  addDataCreator,
  eraseDataCreator,
} from "../../assets/utils";
import {
  UserCircleIcon as Person,
  AcademicCapIcon as Edu,
  BriefcaseIcon as Exp,
} from "@heroicons/react/16/solid";

export default function ContentTab({
  perData,
  setPersonal,
  eduData,
  setEduData,
  expData,
  setExpData,
}) {
  return (
    <section className="content-tab">
      <Accordian head="Personal Details" icon={<Person />}>
        <Details
          inputFieldData={perData[0]}
          handleInputChange={handleCreator(setPersonal)}
        />
      </Accordian>
      <Accordian
        head="Education"
        icon={<Edu />}
        addData={addDataCreator(setEduData, educationData[0])}>
        <DatacardCreator
          data={eduData}
          eraseData={eraseDataCreator(setEduData)}
          handleInputChange={handleCreator(setEduData)}
        />
      </Accordian>
      <Accordian
        head="Experience"
        icon={<Exp />}
        addData={addDataCreator(setExpData, experienceData[0])}>
        <DatacardCreator
          data={expData}
          eraseData={eraseDataCreator(setExpData)}
          handleInputChange={handleCreator(setExpData)}
        />
      </Accordian>
    </section>
  );
}
