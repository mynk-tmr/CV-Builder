import FormSection from "./FormSection";

const FormContainer = () => {
  const education = {
    school: "University of Delhi",
    degree: "Bachelor of Science",
    startedIn: "2016-06",
    finishedOn: "2019-05",
    location: "New Delhi, India",
  };

  const experience = {
    place: "Accenture",
    title: "React Engineer",
    startedIn: "2022-11",
    finishedOn: "2023-07",
    location: "New Delhi, India",
    description:
      "Designed and prototyped user interface patterns for various clients across diverse fields. Produced interactive documentation and tested & refactored legacy React class based code.",
  };

  return (
    <section>
      <FormSection
        sectionName="education"
        initValues={education}
        labels={["School", "Degree", "Started In", "Finished On", "Location"]}
        pins={["school", "degree", "startedIn", "finishedOn", "location"]}
      />
      <FormSection
        sectionName="experience"
        initValues={experience}
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
          "location-wc",
          "description",
        ]}
      />
    </section>
  );
};

export default FormContainer;
