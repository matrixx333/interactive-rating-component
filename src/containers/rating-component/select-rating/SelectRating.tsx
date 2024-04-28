import "../../rating-component/rating-component.css";
import "./select-rating.css";
import Star from "../../../components/star/Star";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import Ratings from "../../../components/ratings/Ratings";
import Rating from "../../../models/rating";

interface Props {
  ratings: Rating[];
  handleSubmitted: () => void;
  handleRatingClick: (value: number) => void;
}

function SelectRating({ ratings, handleSubmitted, handleRatingClick }: Props) {
  return (
    <div id="select-rating-container" className="card">
      <Star></Star>
      <h1 className="heading-lg">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings ratings={ratings} handleRatingClick={handleRatingClick}></Ratings>
      <SubmitButton handleSubmitted={handleSubmitted}></SubmitButton>
    </div>
  );
}

export default SelectRating;
