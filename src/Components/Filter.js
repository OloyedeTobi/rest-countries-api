import  { useContext } from 'react';
import { GeneralContext } from '../Contexts/GeneralContext';
import '../Styles/Filter.css'

const Filter = () => {
  const { filter, setFilter, setRegion, darkTheme } = useContext(GeneralContext);

  return (
    <div className='filter'>
      <button onClick={() => setFilter(!filter)} className={`filter-btn ${darkTheme ? 'darkmodeFilter' : 'lightmodeFilter'}`}><span>Filter by Region</span></button>
      {filter && (
        <div className={`filter-list ${darkTheme ? 'darkmodeList' : 'lightmodeList'}`}>
          <button  onClick={() => setRegion("all")}>All</button>
          <button  onClick={() => setRegion("africa")}>Africa</button>
          <button  onClick={() => setRegion("americas")}>Americas</button>
          <button  onClick={() => setRegion("asia")}>Asia</button>
          <button  onClick={() => setRegion("europe")}>Europe</button>
          <button  onClick={() => setRegion("oceania")}>Oceania</button>
        </div>
      )}
    </div>
  )
}

export default Filter;