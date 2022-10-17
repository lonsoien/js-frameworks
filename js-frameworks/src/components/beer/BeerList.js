import { useState, useEffect } from "react";
import { API_URL } from "../../constants/Api";
import BeerItem from "../../components/beer/BeerItem"; 


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
      <div className="beer">
      {beers.map(function (beer) {
       const { id, name, description } = beer;
       return <BeerItem key={id} id={id} name={name} description={description} />;
      })}
     </div>
    );
   }
   
   export default BeerList;