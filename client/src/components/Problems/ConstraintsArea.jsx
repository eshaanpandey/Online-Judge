import React from "react";

function ConstraintsArea({ constraints }) {
  return (
    <div className="mt-6 font-serif">
      <h1 className="mb-2">Constraints: </h1>
      {constraints 
      // &&
      //   constraints.map((constraint) => {
      //     return <p>{constraint}</p>;
      //   })
        }
    </div>
  );
}

export default ConstraintsArea;