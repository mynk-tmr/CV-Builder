import { educationData, experienceData } from "../assets/data";
import Accordian from "./Accordian";
import Details from "./Details";
import DatacardCreator from "./DatacardCreator";
import {
  handleCreator,
  addDataCreator,
  eraseDataCreator,
} from "../assets/utils";
import {
  MdMan4 as Person,
  MdOutlineSchool as Edu,
  MdOutlineWorkOutline as Exp,
} from "react-icons/md";

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
