import ImgcMenu from '../../assets/Icons/ImgcMenu';
import ImgcDarken from '../../assets/Icons/ImgcLightingMode';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import './styles.scss';
import PageName from '../../components/PageName/PageName';
import PropTypes from 'prop-types';

export default function HeaderMobile({page,isActivate}){
    return(
        <header id="header-mobile">
            <div className="content-header">
                <ButtonHeader click={isActivate} componentArr={<ImgcMenu width="18px" fill="#F7DF1E" />} />
                <PageName pageName={page} />
                <ButtonHeader componentArr={<ImgcDarken fill={"#323232"} width="50px" />}/>
            </div>
        </header>
    )
}

HeaderMobile.propTypes={
    isActivate: PropTypes.func.isRequired,
    page: PropTypes.string,
}