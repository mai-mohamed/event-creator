import React from "react";
import { Button, Spinner } from "react-bootstrap";

const SharedButton = ({
  color,
  text,
  onClick,
  className,
  type,
  disabled,
  loading,
}) => {
  return (
    <Button
      className={`button ${className}`}
      variant={color || "light"}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default SharedButton;
