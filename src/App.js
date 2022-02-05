import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Buyers from './Buyers';
import Sellers from './Sellers';
import StarterForm from "./StarterForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path='/'
          element={
            <>
            <Header />,
            <Hero /> ,
            <Buyers />,
            <Sellers />
            </>
          }
        />

        <Route path='/start-here' element={<><Header />, <StarterForm /> </>} />


      </Routes>
      


    </div>


    
  );
}

export default App;
