import './submit-button.css';

interface Props {
  handleSubmitted: () => void;
}

function SubmitButton({handleSubmitted}: Props) {
  return (
    <button onClick={handleSubmitted} className="submit-button heading-med" type="button">SUBMIT</button>
  );
}

export default SubmitButton;