import WebSiteCreatorName from '../../components/WebsiteCreatorName/WebsiteCreatorName'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import './styles.scss'

export default function FooterMobile(){
    const styles = {
        color: "#F7DF1E"
    }
    return(
        <footer id='footer'>
            <div className='content-footer'>
                <WebSiteCreatorName styless={styles} creatorName={"@ 2023 Ivan Mauri Garcia Callirgos"}/>
                <SocialNetworks />
            </div>
        </footer>
    )
}