import { useCallback, useState } from "react";

const generator = (function* (id) {
  while (true) yield 'id_' + (id++);
})(0);
export const keygen = () => generator.next().value;

export function useToggle(init) {
  const [value, setter] = useState(init);
  const toggler = useCallback(() => {
    setter(prev => !prev);
  }, []);
  return [value, toggler];
}

const handleCreator = (setter) => (e) => setter(prevData =>
  prevData.map(details => details.map(field => field[0] !== e.target.id ? field : field.slice(0, -1).concat(e.target.value)))
  );

const addDataCreator = (setter, protoField) => () => setter(prevData =>
  prevData.concat([protoField.map(field => [keygen(), field[1], field[2], ""])])
  );

const eraseDataCreator = (setter) => (index) => setter(prevData =>
  prevData.filter((prevData, pos) => pos !== index)
  )

export { handleCreator, addDataCreator, eraseDataCreator };