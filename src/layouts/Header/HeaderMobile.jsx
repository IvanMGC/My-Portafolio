import ImgcMenu from '../../assets/Icons/ImgcMenu';
import ImgcDarken from '../../assets/Icons/ImgcLightingMode';
import ImgcClarify from '../../assets/Icons/ImgcClarify';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import './styles.scss';
import PageName from '../../components/PageName/PageName';
import PropTypes from 'prop-types';
import { useFilterPage } from '../../utils/hooks/useFilterPage';
import { useEffect, useState } from 'react';

export default function HeaderMobile({isActivate, widthWindow}){
    const storedValue = localStorage.getItem('isDarkMode');
    const initialIsDarkMode = storedValue ? storedValue === 'true' : false;
    const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);
    
    
    const filterPage = useFilterPage();
    
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const handleSwitchClick = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
    }

    

    return(
        <header id="header-mobile">
            <div className="content-header">
                
                {(widthWindow <=743) && <ButtonHeader click={isActivate} componentArr={<ImgcMenu width="18px" fill="#F7DF1E" />} />}
                <PageName pageName={filterPage} />
                <ButtonHeader newId={"switch"} click={()=>handleSwitchClick()} componentArr={isDarkMode? <ImgcClarify fill={"#fff"} width="50px" />:<ImgcDarken fill={"#323232"} width="50px" />}/>
            </div>
        </header>
    )
}

HeaderMobile.propTypes={
    isActivate: PropTypes.func,
    widthWindow: PropTypes.number,
}