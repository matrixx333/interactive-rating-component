import Rating from "../../models/rating";
import "./rating-button.css";

interface Props {
  rating: Rating;
  handleRatingClick: () => void;
}

function RatingButton({ rating, handleRatingClick }: Props) {
  const ratingButtonClass = rating.isActive
    ? "rating-button active"
    : "rating-button";

  return (
    <div id="rating-button-container">
      <button className={ratingButtonClass} onClick={handleRatingClick}>
        {rating.value}
      </button>
    </div>
  );
}

export default RatingButton;
