import Rating from "@/components/Rating";
import React from "react";

const ReviewCard = ({ data }) => {
  const name = data?.p_user_name;
  return (
    <div className="flex flex-col gap-3 my-5">
      <div className="flex flex-col gap-4 bg-slate-50 p-4 rounded-xl shadow-md">
        <div className="flex justify justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 text-center rounded-full p-1 bg-sky-500">
              {name[0]}
            </div>
            <span className="italic font-medium">{name}</span>
          </div>
          <Rating rate={data?.p_user_rate} />
        </div>

        <div className="font-medium text-lg ">{data?.p_review_msg}</div>

        <div className="flex justify-between">
          <span className="text-gray-400">{data?.p_review_date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
