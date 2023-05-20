import ImgFacebook from "../../assets/Logos/ImgFacebook"
import ImgLinkedin from "../../assets/Logos/ImgLinkedin"
import ImgWhatsapp from "../../assets/Logos/ImgWhatsapp"
import ImgcGitHubDesk from "../../assets/Logos/ImgcGitHubDesk"
import Icon from "../../components/Icon/Icon"
import "./styles.scss"
export default function SocialNetworks(){
    return(
        <div className="social-networks">
            <Icon link={"https://github.com/IvanMGC"} componentSVG={<ImgcGitHubDesk width="20px" />} />
            <Icon link={"https://www.linkedin.com/in/ivangarciacallirgos/"} componentSVG={<ImgLinkedin width="20px" />} />
            <Icon link={"https://www.facebook.com/profile.php?id=100018257051691"} componentSVG={<ImgFacebook width="20px" />} />
            <Icon link={"https://wa.me/989830053"} componentSVG={<ImgWhatsapp width="20px" />} />
        </div>
    )
}