import ImgcMenu from '../../assets/Icons/ImgcMenu';
import ImgcDarken from '../../assets/Icons/ImgcLightingMode';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import './styles.scss';
import PageName from '../../components/PageName/PageName';
import PropTypes from 'prop-types';
import { useFilterPage } from '../../utils/hooks/useFilterPage';

export default function HeaderMobile({isActivate, widthWindow}){
    const filterPage = useFilterPage();
    return(
        <header id="header-mobile">
            <div className="content-header">
                
                {(widthWindow <=743) && <ButtonHeader click={isActivate} componentArr={<ImgcMenu width="18px" fill="#F7DF1E" />} />}
                <PageName pageName={filterPage} />
                <ButtonHeader componentArr={<ImgcDarken fill={"#323232"} width="50px" />}/>
            </div>
        </header>
    )
}

HeaderMobile.propTypes={
    isActivate: PropTypes.func,
    widthWindow: PropTypes.number,
}