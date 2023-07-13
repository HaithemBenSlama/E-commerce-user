import Card from "@/components/Card";
import Title from "@/components/Title";
import React from "react";

const BestRating = ({ data, refreshCart, setRefreshCart }) => {
  return (
    <div className="md:px-20 md:py-5">
      <Title text={"Best Rating"} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 ">
        {data?.map((item) => (
          <Card
            data={item}
            key={item.p_id}
            refreshCart={refreshCart}
            setRefreshCart={setRefreshCart}
          />
        ))}
      </div>
    </div>
  );
};

export default BestRating;
