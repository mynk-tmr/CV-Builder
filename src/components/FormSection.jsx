import { useForm, useFieldArray } from "react-hook-form";
import Input from "./Reusables/Input";

const FormSection = () => {
  const { register, control } = useForm({
    defaultValues: {
      education: [
        //define a field as array
        {
          school: "University of Delhi",
          degree: "Bachelor of Science",
          startedIn: "2016-06",
          finishedOn: "2019-05",
          location: "New Delhi, India",
        },
      ],
    },
  });

  const { fields: collections, append } = useFieldArray({
    name: "education", //use that here
    control,
  });

  const labels = ["School", "Degree", "Started In", "Finished On", "Location"];
  const pins = ["school", "degree", "startedIn", "finishedOn", "location"];

  // append/remove full collection
  // within a collection, loop over labels

  return (
    <form>
      {collections.map((field, index) => (
        //key must be field.id (hook provides)
        <section key={field.id}>
          {labels.map((_, i) => (
            <Input
              index={i}
              key={i}
              label={labels[i]}
              id={`${index}.${pins[i]}`}
              {...register(`education.${index}.${pins[i]}`)}
            />
          ))}
        </section>
      ))}
      <button
        onClick={append}
        type="button"
        className="bg-red-300 px-2 py-1 rounded-md mt-1 hover:bg-red-400 active:bg-red-400">
        Add
      </button>
    </form>
  );
};

export default FormSection;
