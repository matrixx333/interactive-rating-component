import './star.css';
import starImage from '../../assets/Star.png';

function Star() {
  return (
    <div className="star">
        <img src={starImage} alt='star' />
    </div>
  );
}

export default Star;