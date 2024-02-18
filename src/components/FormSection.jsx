import { useForm, useFieldArray } from "react-hook-form";
import Input from "./Reusables/Input";

const FormSection = ({ initValues, labels, pins, sectionName }) => {
  const { register, control } = useForm({
    defaultValues: {
      [sectionName]: [initValues],
      //e.g. education : { ... },
      //we can now use education.0.degree to register a value
    },
  });

  const { fields: collections, append } = useFieldArray({
    name: sectionName,
    control,
  });

  return (
    <form>
      {collections.map((field, index) => (
        //key must be field.id (hook provides)
        <section key={field.id} className="border-t border-gray-800 py-4">
          {labels.map((_, i) => (
            <Input
              index={i}
              key={i}
              label={labels[i]}
              id={`${index}.${pins[i]}`}
              {...register(`${sectionName}.${index}.${pins[i]}`)}
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
