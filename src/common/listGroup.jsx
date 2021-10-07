import React from "react";

const ListGroup = (props) => {
  const { items, onSelectGenres, selectedGenre } = props;
  console.log(props);
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              item === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item._id}
            onClick={() => onSelectGenres(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
