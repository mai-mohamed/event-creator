import React from "react";
import { Form } from "react-bootstrap";

const InputText = ({
  label,
  type,
  placeholder,
  controls,
  errorMsg,
  customError,
  disabled,
  className,
  labelClassName,
  textarea,
  asterisk,
}) => {
  return (
    <div className="mb-3">
      {label && (
        <Form.Label className={labelClassName}>
          {label}
          {asterisk && <span className="asterisk">*</span>}
        </Form.Label>
      )}
      <Form.Control
        {...controls}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        as={textarea && "textarea"}
        rows={textarea && "3"}
      />
      {errorMsg && <small className="error d-block">{errorMsg}</small>}
      {customError}
    </div>
  );
};
export default InputText;
