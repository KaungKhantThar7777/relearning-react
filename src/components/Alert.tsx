import { PropsWithChildren } from "react";

type Props = {
  isDismissible?: boolean;
  onDismiss?: () => void;
};

const Alert = ({
  onDismiss,
  children,
  isDismissible,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`alert alert-primary ${
        isDismissible ? "alert-dismissible fade show" : ""
      }`}
    >
      {children}
      {isDismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismiss}
        ></button>
      )}
    </div>
  );
};

export default Alert;
