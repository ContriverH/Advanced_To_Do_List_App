import React, { useState } from "react";

function List(props) {
  const [clicked, setClick] = useState(false);

  return (
    <div>
      <li
        onClick={() => setClick(!clicked)}
        style={{ textDecoration: clicked && "line-through" }}
        onDoubleClick={() => props.onChecked(props.id)}
      >
        {props.text}
      </li>
    </div>
  );
}

export default List;
