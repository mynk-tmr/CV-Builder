import { useCallback, useState } from "react";

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

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

export function handleCreator(setterfunc) {
  return function (e) {
    setterfunc((dataset) =>
      dataset.map((atomic) =>
        atomic.map((val) =>
          val[0] === e.target.id
            ? [val[0], val[1], e.target.value, val[3]]
            : val
        )
      )
    );
  };
}

export function addDataCreator(setterfunc, initData) {
  const dummyData = initData.map((data) => [
    keygen(),
    data[1],
    "",
    data[3],
  ]);
  return function () {
    setterfunc((prevData) => prevData.concat([dummyData]));
  };
}

export function eraseDataCreator(setterfunc) {
  return function (index) {
    setterfunc((prevData) =>
      prevData.filter((prevData, pos) => pos !== index)
    );
  };
}