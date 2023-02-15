import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => (
  <Link to={`/accomodation/${id}`} className="gallery_card">
    <img src={cover} alt={title} />
    <h3>{title}</h3>
  </Link>
);

export default Card;