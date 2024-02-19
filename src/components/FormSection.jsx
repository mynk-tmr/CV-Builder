import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "./Reusables/Input";
import Accordian from "./Reusables/Accordian";

const FormSection = ({
  labels,
  pins,
  sectionName,
  visualTitle,
  appendPrototype,
}) => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: sectionName,
    //control (if using useForm)
  });

  return (
    <form className="inline-grid gap-y-4">
      {fields.map((field, index) => (
        //key must be field.id (hook provides)
        <Accordian key={field.id}>
          <Accordian.Header>{visualTitle}</Accordian.Header>
          <Accordian.Body
            add={() => append(appendPrototype)}
            destroy={() => remove(index)}
            isCopyable={sectionName !== "personal"}
            //the first type of each subform is unremovable
            isDeletable={index !== 0}>
            {labels.map((_, i) => (
              <Input
                key={i}
                label={labels[i]}
                //e.g. eduction.0.degree
                id={`${sectionName}.${index}.${pins[i]}`}
                {...register(`${sectionName}.${index}.${pins[i]}`)}
              />
            ))}
          </Accordian.Body>
        </Accordian>
      ))}
    </form>
  );
};

export default FormSection;
