import { GeneralContext } from '../Contexts/GeneralContext';
import { useContext } from 'react';
import '../Styles/Loader.css';

const Loader = () =>{
    const { darkTheme} = useContext(GeneralContext); 

    return(
 <>
    <section className={darkTheme ? 'darkLoad' : 'lightLoad'}>
        <div className="loader">
            <span className="i6"></span>
            <span className="i7"></span>
            <span className="i8"></span>
            <span className="i9"></span>
            <span className="i10"></span>
            <span className="i11"></span>
            <span className="i12"></span>
            <span className="i13"></span>
            <span className="i14"></span>
            <span className="i15"></span>
            <span className="i16"></span>
            <span className="i17"></span>
            <span className="i18"></span>
            <span className="i19"></span>
            <span className="i20"></span>     
        </div>
    </section>
</>
    )
}

export default Loader;