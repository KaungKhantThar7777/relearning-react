import React, { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
};

const Button = ({ color = "primary", onClick }: PropsWithChildren<Props>) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
