import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

type Props = {};

const App = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAlert = () => {
    setIsOpen(true);
  };
  const closeAlert = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <Alert isDismissible={true} onDismiss={closeAlert}>
          My Alert
        </Alert>
      )}
      <Button color="danger" onClick={openAlert}>
        Delete
      </Button>
    </div>
  );
};

export default App;
