import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BeerItem ({ id, name, description }) {
 return (
  <Link to={`detail/id${id}`}>
   <h4>{name}</h4>
   <p>{description}</p>
  </Link>
 );
}

BeerItem.propTypes = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired,
};

export default BeerItem;