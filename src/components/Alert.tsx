import { PropsWithChildren } from "react";

type Props = {};

const Alert = ({ children }: PropsWithChildren) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
