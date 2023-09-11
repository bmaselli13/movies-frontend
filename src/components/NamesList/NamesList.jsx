import React from "react";
import NameBadge from "../NameBadge/NameBadge";

const NamesList = () => {
  const names = [
    { firstName: "Lucas", lastName: "Smith" },
    { firstName: "Maria", lastName: "Garcia" },
    { firstName: "Elijah", lastName: "Williams" },
    { firstName: "Sophia", lastName: "Johnson" },
  ];

  let displayedNames = names.map((name) => (
    <NameBadge
      displayedName={`${name.firstName} ${name.lastName}`}
      key={name.firstName}
    />
  ));

  return <div>{displayedNames}</div>;
};

export default NamesList;
