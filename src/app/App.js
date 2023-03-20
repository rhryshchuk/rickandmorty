import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroesList from '../components/heroesList/HeroesList';
import HeroDetails from "../components/heroesList/HeroDetails";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails/>} />
      </Routes>
    </Router>
    
  
 
  );
}

const Home = () => {

  return (
    <>
      <HeroesList page="/" />
    </>
   
  )
 

}

export default App;
