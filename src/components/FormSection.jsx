import { useForm, useFieldArray } from "react-hook-form";
import Input from "./Reusables/Input";
import Accordian from "./Reusables/Accordian";
import { useEffect } from "react";

const FormSection = ({
  initValues,
  labels,
  pins,
  sectionName,
  visualTitle,
  onUpdate,
}) => {
  const { register, control, watch } = useForm({
    defaultValues: {
      [sectionName]: [initValues],
      //e.g. education : [{ ... }],
      //we can now use education.0.degree to register a value
    },
  });

  const formValues = watch();
  useEffect(() => {
    onUpdate(formValues);
  }, [formValues]);

  const {
    fields: collections,
    append,
    remove,
  } = useFieldArray({
    name: sectionName,
    control,
  });

  return (
    <form className="inline-grid gap-y-4">
      {collections.map((field, index) => (
        //key must be field.id (hook provides)
        <Accordian key={field.id}>
          <Accordian.Header>{visualTitle}</Accordian.Header>
          <Accordian.Body append={append} destroy={() => remove(index)}>
            {labels.map((_, i) => (
              <Input
                key={i}
                label={labels[i]}
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
