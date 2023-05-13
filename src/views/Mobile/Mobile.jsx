import './styles.scss'
import HeaderMobile from "../../layouts/Header/HeaderMobile";
import FooterMobile from '../../layouts/Footer/FooterMobile';


export default function Mobile(){
    return(
        <div id='content-mobile'>
            <HeaderMobile />
            <h1>I am a mobile</h1>
            <FooterMobile />
        </div>
    )
}