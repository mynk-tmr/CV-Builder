import { Fragment } from "react";
import Input from "./Input";

export default function Details({ inputFieldData, handleInputChange }) {
  return (
    <article className="detailsbox">
      {inputFieldData.map(([key, type, label, def_val]) => {
        return (
          <Fragment key={key}>
            <label htmlFor={key}>{label}</label>
            <Input
              type={type}
              name={key}
              id={key}
              value={def_val}
              onChange={handleInputChange}
            />
          </Fragment>
        );
      })}
    </article>
  );
}
