import './styles.scss'
import HeaderMobile from "../../layouts/Header/HeaderMobile";
import FooterMobile from '../../layouts/Footer/FooterMobile';
import { useState } from 'react';
import MenuMobile from '../../layouts/MenuMobile/MenuMobile';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Mobile({wSize}){
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    
    return(
        <div id='content-mobile'>
            {isActiveMenu && <MenuMobile isActivate={()=>setIsActiveMenu(!isActiveMenu)} />}
            <HeaderMobile widthWindow={wSize} isActivate={()=>setIsActiveMenu(!isActiveMenu)} />
            <div className='content-pages'>
                <Outlet />
            </div>
            <FooterMobile />
        </div>
    )
}
Mobile.propTypes = {
    wSize: PropTypes.number,
}