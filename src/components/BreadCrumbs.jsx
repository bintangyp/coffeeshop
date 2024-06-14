import React from "react";

const BreadCrumbs = ({ link }) => {
  const linkBC = link.map((li, id) => <li key={id}>{li}</li>);
  return (
    <div className="text-lg breadcrumbs font-bold my-2 capitalize">
      <ul>{linkBC}</ul>
    </div>
  );
};

export default BreadCrumbs;
