import { useState } from "react";
import styled from "styled-components";

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item</p>}
      <StyledList>
        {items.map((item, index) => (
          <StyledListItem
            key={item}
            active={selectedIndex === index}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li<{ active: boolean }>`
  padding: 0;
  background-color: ${(props) => (props.active ? "cyan" : "white")};
  cursor: pointer;
`;

export default ListGroup;
