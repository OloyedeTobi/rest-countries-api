import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../Contexts/GeneralContext';
import '../Styles/CountryCard.css';

const   CountryCard = ({ name, alpha, population, region, capital, flag }) => {

  const navigate = useNavigate();
  const { darkTheme } = useContext(GeneralContext);

  return (
    <>
    <div onClick={() => navigate(`/${alpha}`)} className={`country-card ${darkTheme ? 'darkmodeCard' : 'lightmodeCard'}`}>
      <div>
         <img src={`${flag}`} alt="country flag" />
      </div>
      <div className='country-details'>
        <h3>{name}</h3>
        <p>Population: <span>{population.toLocaleString()}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </div>
  </>
  )
}

export default CountryCard;

