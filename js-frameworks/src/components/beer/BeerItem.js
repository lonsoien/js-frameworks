import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BeerItem ({ id, name, description }) {
 return (
  <Link to={`beer/${id}`}>
   <h4>Name: {name}</h4>
   <p>Info: {description}</p>
  </Link>
 );
}

BeerItem.propTypes = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired,
};

export default BeerItem;