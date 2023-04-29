import ListGroup from "./components/ListGroup";

type Props = {};

const App = (props: Props) => {
  const handleSelectItem = (item: string) => {
    console.log({ item });
  };
  return (
    <div>
      <ListGroup
        items={["Myanmar", "Thailand", "Singapore", "Japans"]}
        heading="Country List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
