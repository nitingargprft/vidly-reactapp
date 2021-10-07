import React from "react";

const ListGroup = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
