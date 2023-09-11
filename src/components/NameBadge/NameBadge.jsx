import React from "react";

function NameBadge(props) {
  return (
    <div className="name-badge-container">
      <h1>{props.displayedName}</h1>
    </div>
  );
}

export default NameBadge;
