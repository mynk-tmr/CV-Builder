import {
  BriefcaseIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import FormSection from "./FormSection";
import { FormProvider, useForm } from "react-hook-form";
import { clearValues } from "../config/data";
import { useEffect } from "react";

const FormContainer = ({ userData, setUserData }) => {
  const formMethods = useForm({
    defaultValues: userData,
  });

  const { watch } = formMethods;
  useEffect(() => {
    //callback runs when any value change by user
    const watchAll = watch((values) => {
      setUserData(values);
    });
    () => watchAll.unsubscribe();
  }, []);

  let protoPersonal = clearValues(userData.personal);
  let protoEducation = clearValues(userData.education);
  let protoExperience = clearValues(userData.experience);

  return (
    <section className="grid gap-y-8 w-[65ch]">
      <FormProvider {...formMethods}>
        <FormSection
          visualTitle={
            <span>
              <UserCircleIcon /> Personal Info
            </span>
          }
          labels={["Full Name", "Email", "Phone", "Address"]}
          pins={Object.keys(protoPersonal)}
          sectionName="personal"
          appendPrototype={protoPersonal}
        />
        <FormSection
          visualTitle={
            <span>
              <AcademicCapIcon /> Education
            </span>
          }
          labels={["School", "Degree", "Started In", "Finished On", "Location"]}
          pins={Object.keys(protoEducation)}
          sectionName="education"
          appendPrototype={protoEducation}
        />
        <FormSection
          visualTitle={
            <span>
              <BriefcaseIcon /> Experience
            </span>
          }
          labels={[
            "Place of Work",
            "Position Title",
            "Started In",
            "Finished On",
            "Location",
            "Description",
          ]}
          pins={Object.keys(protoExperience)}
          sectionName="experience"
          appendPrototype={protoExperience}
        />
      </FormProvider>
    </section>
  );
};

export default FormContainer;
