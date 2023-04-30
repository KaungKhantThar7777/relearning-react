import Alert from "./components/Alert";
import Button from "./components/Button";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Alert>Hello World 2</Alert>
      <Button color="danger" onClick={() => console.log("Click")}>
        Delete
      </Button>
    </div>
  );
};

export default App;
