import FooterMobile from '../../layouts/Footer/FooterMobile';
import PaginationMenu from '../../layouts/PaginationMenu/Menu';
import './styles.scss';
import PropTypes from 'prop-types';
export default function Desktop({wSize}){
    return(
        <div id='content-tablet-desktop'>
            <div id='content-mix'>
                <div id='navigation-bar'>
                    <PaginationMenu />
                </div>
                <div id='general-content'>
                    Hola2
                </div>
            </div>
            <FooterMobile />
        </div>
    )
}

Desktop.propTypes = {
    wSize: PropTypes.number,
}