import ImgcMenu from '../../assets/Icons/ImgcMenu';
import ImgcDarken from '../../assets/Icons/ImgcLightingMode';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import './styles.scss';
import PageName from '../../components/PageName/PageName';


export default function HeaderMobile(){
    return(
        <header id="header-mobile">
            <div className="content-header">
                <ButtonHeader componentArr={<ImgcMenu width="18px" />} />
                <PageName pageName={"Inicio"} />
                <ButtonHeader componentArr={<ImgcDarken fill={"#323232"} width="50px" />}/>
            </div>
        </header>
    )
}