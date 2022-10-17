import BeerList from '../../components/beer/BeerList';
import Heading from '../layout/Heading';
import "../../App.css"; 


export default function Home() {
  return (
    <>
  <Heading title="Beers for Fans" /> 
  <BeerList />
  </>
  );
}


