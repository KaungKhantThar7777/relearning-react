import { useState } from "react";

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
