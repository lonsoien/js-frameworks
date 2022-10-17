import BeerList from '../beer/BeerList';
import Heading from '../layout/Heading';
import BeerDetail from '../beer/BeerDetail';


export default function Home() {
  return (
    <>
  <Heading title="Beers for Fans" /> 
  <BeerList />
  <Route path="/detail/:id">
    <BeerDetail />
    </Route>
  </>
  );
}

