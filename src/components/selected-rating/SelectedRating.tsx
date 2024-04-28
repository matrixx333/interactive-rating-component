
import "./selected-rating.css";

interface Props {
  selectedRating: number;
}

function SelectedRating({selectedRating}: Props) {
  return (
    <div id="selected-rating">You selected {selectedRating} out of 5</div>
  );
}

export default SelectedRating;
