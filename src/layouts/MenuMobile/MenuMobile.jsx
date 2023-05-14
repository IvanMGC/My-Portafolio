import ImgcMenu from '../../assets/Icons/ImgcMenu';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import PropTypes from 'prop-types';
import './styles.scss';
import FooterMobile from '../Footer/FooterMobile';
import PaginationMenu from '../PaginationMenu/Menu';

export default function MenuMobile({isActivate}){
    return(
        <div id='container-menu-mobile'>
            <div className='btn-menu-mobile'>
                <ButtonHeader click={isActivate} componentArr={<ImgcMenu width="18px" fill="#2D2D2D"/>} />
                <PaginationMenu click={isActivate} />
            </div>
            <FooterMobile />
        </div>
    )
}

MenuMobile.propTypes = {
    isActivate: PropTypes.func
}