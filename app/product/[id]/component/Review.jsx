import React, { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Review Text:", reviewText);
    setRating(0);
    setReviewText("");
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "text-yellow-500" : "text-gray-400";

      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-2xl ${starClass}`}
          onClick={() => setRating(i)}
        >
          &#9733;
        </span>
      );
    }

    return (
      <div className="flex items-center">
        {stars}
        {rating > 0 && (
          <span className="ml-2 text-gray-600">You rated {rating} stars.</span>
        )}
      </div>
    );
  };

  return (
    <div className="mt-5 mx-auto p-4 bg-slate-100 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold mb-1">
            Rating:
          </label>
          {renderStars()}
        </div>
        <div className="mb-4">
          <label htmlFor="reviewText" className="block font-bold mb-1">
            Review:
          </label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={handleReviewTextChange}
            className="w-full p-2 border border-gray-300 rounded h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
