import { PropsWithChildren, useState } from "react";
import Alert from "./Alert";

type Props = {
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
};

const Button = ({
  children,
  color = "primary",
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
