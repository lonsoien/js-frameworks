import BeerList from "../beer/BeerList";
import Heading from '../layout/Heading';
import "../../App.css"; 


export default function Home() {
  return (
    <>
  <Heading title="Beers for Fans" /> 
  <BeerList />
  <div className="container">Environment: {process.env.NODE_ENV}</div>
  </>
  );
}


