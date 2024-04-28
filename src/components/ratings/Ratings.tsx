import "./ratings.css";

import RatingButton from "../../components/rating-button/RatingButton";
import Rating from "../../models/rating";

interface Props {
    ratings: Rating[];
    handleRatingClick: (value: number) => void;
}

function Ratings({ratings, handleRatingClick} : Props) {
  return (
    <div className="ratings">
      {ratings.map((rating) => (
        <RatingButton
          key={rating.value}
          rating={rating}
          handleRatingClick={() => handleRatingClick(rating.value)}
        />
      ))}
    </div>
  );
}

export default Ratings;
