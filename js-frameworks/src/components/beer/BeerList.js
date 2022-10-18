import { useState, useEffect } from "react";
import { API_URL } from "../../constants/Api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function BeerList() {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(function () {
     async function fetchData() {
      try {
       const response = await fetch(API_URL);
   
       if (response.ok) {
        const json = await response.json();
        console.log(json);
        setBeers(json);
       } else {
        setError("An error occured");
       }
      } catch (error) {
       setError(error.toString());
      } finally {
       setLoading(false);
      }
     }
     fetchData();
    }, []);
   
    if (loading) {
     return <div>Loading...</div>;
    }
   
    if (error) {
     return <div>ERROR: An error occured</div>;
    }
   
    return (
      <Container>
      {beers.map(function (beer) {
        return <Link to={`beer${beer.id}`}>
        <h4>{beer.name}</h4>
        <p>{beer.description}</p>
      </Link>

      })}
      </Container>
    );
   }
   
   export default BeerList;