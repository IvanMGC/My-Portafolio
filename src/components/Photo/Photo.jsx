import './styles.scss';
import myPhoto from '../../assets/Images/foto.jpg';

export default function Photo(){
    return(
        <div id='photo'>
            <img src={myPhoto} alt="Foto de Ivan Mauri Garcia Callirgos" />
        </div>
    )
}