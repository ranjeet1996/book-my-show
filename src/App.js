import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Page/Home/Home';
import {Moviedetail} from "./Page/MovieDetail/MovieDetail"
import { MovieList } from './Components/MovieList/MovieList';
import Login from './Components/Signin/Login';
import Signup from './Components/Signup/Signup';
import { TicketBooking } from './Components/TicketBooking/TicketBooking';
import { CheckOut } from './Components/CheckOut/CheckOut';
import { useFirebase } from './Firebase';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
         <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='movie/:id' element={<Moviedetail></Moviedetail>}></Route> 
            <Route path='movies/:type' element={<MovieList></MovieList>}></Route>
            <Route path='movies/:type/movie/:id' element={<Moviedetail></Moviedetail>}></Route>
            <Route path='/ticketbook' element={<TicketBooking/>}></Route>

            <Route path="/checkout" element={<CheckOut/>} /> 
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/*' element={<h2>Error</h2>}></Route> 
             
         </Routes>
       </Router>
      </div>

    //<TicketBooking></TicketBooking>
  );
}

export default App;
