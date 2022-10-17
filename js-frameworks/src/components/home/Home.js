import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
import BeerList from '../../components/beer/BeerList';
import Heading from '../layout/Heading';
import BeerDetail from '../../components/beer/BeerDetail';
import "../../App.css"; 


export default function Home() {
  return (
    <>
  <Heading title="Beers for Fans" /> 
  < BeerList />
  <Router>
    <div>
        <Routes>
            <Route path="/detail/:id">
                <BeerDetail />
                </Route>
        </Routes>
	</div>
    </Router>
  </>
  );
}


