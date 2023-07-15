import React from "react";
import ReviewCard from "./ReviewCard";

const Feedback = ({ data }) => {
  return (
    <section className="pt-10 ">
      <div className="container px-4 mx-auto">
        <h1 className="mt-3 mb-3 md:mb-5 text-3xl  font-heading font-medium leading-tight">
          Feedback
        </h1>

        <a
          className="inline-block text-xl font-heading font-medium underline hover:text-darkBlueGray-700"
          href="#"
        >
          {data?.p_nb_reviews} reviews
        </a>
        <div className="md:overflow-y-auto md:max-h-[400px] mt-5 rounded-2xl">
          {data?.p_feedback.map((f) => (
            <ReviewCard data={f} key={data?.p_feed_id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
