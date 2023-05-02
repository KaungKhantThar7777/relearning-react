import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

type Props = {};

const App = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openAlert = () => {
    setIsOpen(true);
  };
  const closeAlert = () => {
    setIsOpen(false);
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
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

      <ListGroup
        items={["Myanmar", "Singapore"]}
        onSelectItem={console.log}
        heading="Countries"
      />
    </div>
  );
};

export default App;
