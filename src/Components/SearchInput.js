import { useContext } from 'react';
import { GeneralContext } from '../Contexts/GeneralContext';
import '../Styles/SearchInput.css'
import * as BsIcons from 'react-icons/bs'


const SearchInput = () => {
  const { search, setSearch, darkTheme } = useContext(GeneralContext);

  return (
  <div className='search'>
    <input 
    value={search}
    onChange={(e) => setSearch(e.target.value)} 
    type="text" 
    placeholder="Search for a country..."
    className={`inputfield ${darkTheme ? 'darkmode' : 'lightmode'}`} />
    <BsIcons.BsSearch className={`searchIcon ${darkTheme ? 'darkmodeSearch' : 'lightmodeSearch'}`}/>
  </div>
  )
}

export default SearchInput;

