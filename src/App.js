import './App.css';
import Header from './pages/layout/Header';
import Home from './pages/home/Home';
import { Routes, Route,Switch } from "react-router-dom";
import Search from './pages/search/Search';
import Offers from './pages/offers/Offers';
import Help from './pages/help/Help';
import Signin from './pages/signin/Signin';
import Cart from './pages/cart/Cart';
import Restaurant from './pages/restaurant/Restaurant';
function App() {
  return (
    <div className="app">
      <Routes>
        
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
               
          <Route path="/search" element={<Search />} />
          <Route path="offers" element={<Offers />} />
          <Route path="help" element={<Help />} />
          <Route path="signin" element={<Signin />} />
          <Route path="cart" element={<Cart />} />
          <Route path="restaurant" element={<Restaurant/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
