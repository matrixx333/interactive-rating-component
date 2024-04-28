import "./display-rating.css";
import onlinePaymentImage from "../../assets/online-payment.png";
import SelectedRating from "../../components/selected-rating/SelectedRating";

interface Props {
    selectedRating: number;    
}

function DisplayRating({selectedRating}: Props) {
  return (
      <div id="display-rating-container">
        <img id="online-payment" src={onlinePaymentImage} alt="online payment" />
        <SelectedRating selectedRating={selectedRating}></SelectedRating>
        <h1 id="thank-you" className="heading-lg">Thank you!</h1>
        <p id="display-rating-comment">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
  );
}

export default DisplayRating;