import { BriefcaseIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import FormSection from "./FormSection";

const FormContainer = () => {
  return (
    <section className="grid gap-y-8 w-[65ch]">
      <FormSection
        visualTitle={
          <span>
            <UserCircleIcon /> Education
          </span>
        }
        labels={["School", "Degree", "Started In", "Finished On", "Location"]}
        pins={["school", "degree", "startedIn", "finishedOn", "location"]}
        sectionName="Education"
        initValues={{
          //pins and keys must be same
          school: "University of Delhi",
          degree: "Bachelor of Science",
          startedIn: "2016-06",
          finishedOn: "2019-05",
          location: "New Delhi, India",
        }}
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
        pins={[
          "place",
          "title",
          "startedIn",
          "finishedOn",
          "location",
          "description",
        ]}
        sectionName="Experience"
        initValues={{
          place: "Accenture",
          title: "React Engineer",
          startedIn: "2022-11",
          finishedOn: "2023-07",
          location: "New Delhi, India",
          description:
            "Designed and prototyped user interface patterns for various clients across diverse fields. Produced interactive documentation and tested & refactored legacy React class based code.",
        }}
      />
    </section>
  );
};

export default FormContainer;
