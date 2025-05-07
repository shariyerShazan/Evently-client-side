
import React, { useContext } from "react";
import { MyContext } from "../ContextAndAuth/Context";

function Review() {
  const { reviewText, setReviewText, rating, setRating, handleReviewSubmit, booked } = useContext(MyContext);

  return (
    <div className="mt-4 bg-white rounded-lg shadow-md p-4 w-full sm:w-[500px]">
      <textarea
        className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        rows="3"
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
        <label className="text-gray-700 font-medium">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border border-pink-300 p-2 rounded-md focus:outline-none"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} ★
            </option>
          ))}
        </select>
        <button
          onClick={() => handleReviewSubmit(booked.id)}
          className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Review;
