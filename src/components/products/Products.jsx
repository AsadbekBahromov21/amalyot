import React, { memo } from "react";
import Card from "../card/Card";

const Products = ({ data }) => {
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {data?.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
