import './styles.scss'
import HeaderMobile from "../../layouts/Header/HeaderMobile";
import FooterMobile from '../../layouts/Footer/FooterMobile';
import { useState } from 'react';
import MenuMobile from '../../layouts/MenuMobile/MenuMobile';
import { Outlet, useLocation } from 'react-router-dom';

export default function Mobile(){
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const location = useLocation().pathname;
    
    const filterPage = () =>{
        const pageNames = {
            "/":"Inicio",
            "/about":"Sobre mi",
            "/portafolio":"Portafolio",
        };
        let route = "";
        for(const prop in pageNames){
            if(location.includes(prop)){
                route=prop;
            }
        }
        return pageNames[route];
    }

    return(
        <div id='content-mobile'>
            {isActiveMenu && <MenuMobile isActivate={()=>setIsActiveMenu(!isActiveMenu)} />}
            <HeaderMobile page={filterPage()} isActivate={()=>setIsActiveMenu(!isActiveMenu)} />
            <div className='content-pages'>
                <Outlet />
            </div>
            <FooterMobile />
        </div>
    )
}
