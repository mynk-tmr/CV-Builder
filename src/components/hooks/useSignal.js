import { useState } from "react";

export default function (init) {
  const [val, setVal] = useState(init);
  return {
    get signal() {
      return val;
    },
    set signal(_new) {
      setVal(_new);
    },
  };
}
