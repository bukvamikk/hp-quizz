import React from "react";

function HouseSelector(props) {
  return (
    <label>
      Pick your house:
      <select
        value={props.house}
        onChange={(event) => {
          props.onHouseChange();
        }}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
      {console.log(props)}
    </label>
  );
}

export default HouseSelector;
