import React from "react";
import ReviewCard from "./ReviewCard";

const Feedback = ({ data }) => {
  return (
    <section class="pt-10 ">
      <div class="container px-4 mx-auto">
        <h1 class="mt-3 mb-3 md:mb-5 text-3xl  font-heading font-medium leading-tight">
          Feedback
        </h1>

        <a
          class="inline-block text-xl font-heading font-medium underline hover:text-darkBlueGray-700"
          href="#"
        >
          {data?.p_nb_reviews} reviews
        </a>
        <div className="md:overflow-y-auto md:max-h-[400px] mt-5 rounded-2xl">
          {data?.p_feedback.map((f) => (
            <ReviewCard data={f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
