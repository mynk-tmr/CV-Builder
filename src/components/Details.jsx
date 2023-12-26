import { Fragment } from "react";
import { capitalize } from "../assets/utils";
import Input from "./Input";

export default function Details({ inputFieldData, handleInputChange }) {
  return (
    <article className="detailsbox">
      {inputFieldData.map(([key, label, def_val, type]) => {
        return (
          <Fragment key={key}>
            <label htmlFor={key}>{capitalize(label)}</label>
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
