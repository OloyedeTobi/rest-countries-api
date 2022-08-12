import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import { useParams, useNavigate } from 'react-router-dom';
import { GeneralContext} from '../Contexts/GeneralContext';
import * as BsIcons from 'react-icons/bs';
import '../Styles/CountryDetails.css'




const CountryDetails = () => {
  const [data, setData] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const { name } = useParams();
  const { darkTheme, loading, setLoading } = useContext(GeneralContext);
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    const fetchData = async() =>{
    const response = await fetch(`https://restcountries.com/v2/alpha/${name}`)
    const jsondata = await response.json();
    !jsondata.status && setData(jsondata);
    console.log(jsondata)
    setLoading(false);
    }
    fetchData()
  }, [name]);


  useEffect(() => {
    if (updateData) {
      setUpdateData('');
      const fetchData = async() =>{
      const response = await fetch(`https://restcountries.com/v2/alpha/${updateData}`)
      const jsondata = await response.json();
      !jsondata.status && setData(jsondata);
      }
      fetchData()
      navigate(`/${updateData}`);
    }
  }, [updateData]);

  
  
  return (
    <>
      <Header />
      {data  && (
        <main className={`country-details-con ${darkTheme ? 'darkmodeDetails' : 'lightmodeDetails'}`}>
          <div>
            <button className='back' onClick={() => navigate("/")}><BsIcons.BsArrowLeft fontWeight="700"/><span>Back</span></button>
            {loading ? (
              <div>loading...</div>
            ) : 
            
            (
              <div className='country-details-container'>
                <img src={`${data.flag}`} alt="flag" />
                <div className='right-about'>
                  <div className='about-country'>
                    <h2>{data.name}</h2>
                    <div className='about-country-container'>
                      <div>
                        <p>Population: <span>{data.population.toLocaleString()}</span></p>
                        <p>Region: <span>{data.region}</span> </p>
                        <p>Sub Region:<span>{data.subregion}</span></p>
                        <p>Capital: <span>{data.capital}</span></p>
                        <p>Native Name: <span>{data.nativeName}</span></p>
                      </div>
                      <div>
                        <p>Top Level Domain: <span>{data.topLevelDomain}</span></p>
                        <p>Currencies: {data.currencies.map(currency => {
                          return <span> {currency.name},</span>
                        })}</p>

                        <p>Languages: 
                        {data.languages.map(language => {
                          return <span key={language.iso639_1} > {language.name}, </span>
                        })} 
                         </p>
                      </div>
                    </div>
                  </div>
                  {data && (
                    <div>
                      <h1>Border Countries:</h1>
                      <div>
                        {data.borders && data.borders.map(border => {
                          return <button className="border" key={border} onClick={() => setUpdateData(border)}>{border}</button>
                        })}
                      </div>
                    </div>
                  )}        
              </div>
            </div>
            )}
          </div>
        </main>
      )}
    </>
  )
}

export default CountryDetails;

