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

          <div class="text-center">
            <button class="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
