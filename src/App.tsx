import React, { useState } from "react";
import "./App.css";
import SelectRating from "./containers/select-rating/SelectRating";
import DisplayRating from "./containers/display-rating/DisplayRating";
import Rating from "./models/rating";

function App() {
  let ratingObjects: Rating[] = [];

  for (let i = 1; i <= 5; i++) {
    let rating: Rating = { value: i, isActive: false };
    ratingObjects.push(rating);
  }

  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratings, setRatings] = useState(ratingObjects);

  function handleRatingClick(value: number) {
    ratings.map((rating) => (rating.isActive = false));

    const updatedRatings = ratings.map((rating) => {
      if (rating.value === value) {
        return { ...rating, isActive: !rating.isActive };
      }

      return rating;
    });

    setRatings(updatedRatings);
    setSelectedRating(value);
  }

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  return (
    <>
      <main className="App">
        {!submitted ? (
          <SelectRating
            ratings={ratings}
            handleSubmitted={handleSubmitted}
            handleRatingClick={handleRatingClick}></SelectRating>
        ) : (
          <DisplayRating selectedRating={selectedRating} />
        )}
      </main>
    </>
  );
}

export default App;
