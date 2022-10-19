import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BeerItem ({ id, name, description, first_brewed }) {
 return (
  <Link to={`beer/${id}`}>
   <h4>{name}</h4>
   <p>Info: {description}</p>
   <p>{first_brewed}</p>
  </Link>
 );
}

BeerItem.propTypes = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired,
 first_brewed: PropTypes.string.isRequired,
};

export default BeerItem;