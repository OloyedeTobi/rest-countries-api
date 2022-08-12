import { useContext } from 'react';
import { GeneralContext } from '../Contexts/GeneralContext';
import * as BsIcons from 'react-icons/bs'
import '../Styles/Header.css'


const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(GeneralContext);

  return (
    <header className={`header ${darkTheme ? 'darkmodeHeader' : 'lightmodeHeader'}`}>
      <div>
        <h3>Where in the world?</h3>
        <button onClick={() => { setDarkTheme(!darkTheme) }}> {darkTheme ? <div><BsIcons.BsMoonFill/><span>Dark Mode</span></div> : <div><BsIcons.BsSunFill/><span>Light Mode</span></div>}</button>
      </div>
    </header>
  )
}

export default Header;
