import React, {useState, useEffect} from "react";
import { useParams, Link} from "react-router-dom";
import './style.css';

const HeroDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, image, gender, status, species, origin, type } = fetchedData;

    console.log(origin?.name);


    let api = `https://rickandmortyapi.com/api/character/${id}`;

    const fetchData = () => {
    fetch(api, { method: "GET" })
      .then(async response => {
        const data = await response.json();
        updateFetchedData(data)
      })
  };

  useEffect(() => {
    fetchData();
  }, [api]);
    
    return (
      <div className="d__flex">
        <Link to="/" className="btn"><img className="arrow" src="/icon/arrow.png" alt="icon-arrow"/> GO BACK </Link>
          <div className="">
              <img src={image} alt="heroimg" className="hero-img" />
          <h1 className="name-hero">{name}</h1>
          <p className="information-p d__flex">Informations</p>
         
                <div className="Informations">                    
                    <div className="info">Gender <p className="info-p">{gender}</p></div>
                    <div className="info">Status <p className="info-p">{status}</p></div>
                    <div className="info">Specie <p className="info-p">{species}</p></div>
                    <div className="info">Origin <p className="info-p">{origin?.name}</p></div>
                    <div className="info">Type <p className="info-p">{type}</p></div>
                </div>
          </div>

        </div>
    )
}

export default HeroDetails;