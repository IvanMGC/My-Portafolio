import { Outlet } from 'react-router-dom';
import FooterMobile from '../../layouts/Footer/FooterMobile';
import HeaderMobile from '../../layouts/Header/HeaderMobile';
import PaginationMenu from '../../layouts/PaginationMenu/Menu';
import './styles.scss';
export default function Desktop(){
    return(
        <div id='content-tablet-desktop'>
            <div id='content-mix'>
                <div id='navigation-bar'>
                    <PaginationMenu />
                </div>
                <div id='general-content'>
                    <HeaderMobile />
                    <div id='content-pages'>
                        <Outlet />
                    </div>
                </div>
            </div>
            <FooterMobile />
        </div>
    )
}
