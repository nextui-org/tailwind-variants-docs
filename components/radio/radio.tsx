import React from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-aria/radio";

let RadioContext = React.createContext(null);

export function RadioGroup(props) {
  let { children, label, description, errorMessage, validationState } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className="my-2">
      <span
        {...labelProps}
        className="text-slate-800 dark:text-slate-200 font-semibold"
      >
        {label}
      </span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && validationState === "invalid" && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export function Radio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps } = useRadio(props, state, ref);

  return (
    <label className="flex items-center mt-2">
      <input {...inputProps} ref={ref} className="w-4 h-4" />
      <p className="pl-2">{children}</p>
    </label>
  );
}
