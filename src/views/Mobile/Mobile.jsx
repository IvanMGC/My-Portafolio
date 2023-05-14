import './styles.scss'
import HeaderMobile from "../../layouts/Header/HeaderMobile";
import FooterMobile from '../../layouts/Footer/FooterMobile';
import { useState } from 'react';
import MenuMobile from '../../layouts/MenuMobile/MenuMobile';
import { Outlet } from 'react-router-dom';


export default function Mobile(){
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    return(
        <div id='content-mobile'>
            {isActiveMenu && <MenuMobile isActivate={()=>setIsActiveMenu(!isActiveMenu)} />}
            <HeaderMobile isActivate={()=>setIsActiveMenu(!isActiveMenu)} />
            <div>
                <Outlet />
            </div>
            <FooterMobile />
        </div>
    )
}