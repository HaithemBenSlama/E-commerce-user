import Rating from "@/components/Rating";
import React from "react";

const ReviewCard = ({ data }) => {
  const name = data?.p_user_name;
  return (
    <div class="flex flex-col gap-3 my-5">
      <div class="flex flex-col gap-4 bg-slate-50 p-4 rounded-xl shadow-md">
        <div class="flex justify justify-between">
          <div class="flex gap-4 items-center">
            <div class="w-8 h-8 text-center rounded-full p-1 bg-sky-500">
              {name[0]}
            </div>
            <span className="italic font-medium">{name}</span>
          </div>
          <Rating rate={data?.p_user_rate} />
        </div>

        <div className="font-medium text-lg ">{data?.p_review_msg}</div>

        <div class="flex justify-between">
          <span className="text-gray-400">{data?.p_review_date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
