import React, { useContext } from 'react';
import { GeneralContext } from '../Contexts/GeneralContext';
import Header from './Header';
import Input from './SearchInput';
import Filter from './Filter';
import CountryCard from './CountryCard';
import '../Styles/HomePage.css'

const HomePage = () => {
  const { data, darkTheme, loading } = useContext(GeneralContext);

  return (
    <>
      <Header />
      <div className={`home ${darkTheme ? 'darkmode' : 'lightmode'}`}>
      <main>
        <div>
          <div className='filter-input-area'>
            <Input />
            <Filter />
          </div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className='grid'>
              {data.map(country => {
                return <CountryCard key={country.name} name={country.name} alpha={country.alpha3Code} population={country.population} region={country.region} capital={country.capital} flag={country.flags.svg} />
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  </>
  );
};

export default HomePage;
