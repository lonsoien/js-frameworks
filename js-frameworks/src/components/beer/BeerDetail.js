import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/Api";

function BeerDetail() {
 const [beer, setBeer] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useNavigate();
 const { id } = useParams();

 if (!id) {
  history.push("/beer");
 }

 const url = API_URL + "/beer" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);

     if (response.ok) {
      const json = await response.json();
      console.log(json);
      setBeer(json);
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
  },
  [url]
 );

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>An error occured: {error}</div>;
 }

 return (
  <div className="beer-detail">
   <h4>{beer.name}</h4>
   <p>{beer.description}</p>
  </div>
 );
}

export default BeerDetail;