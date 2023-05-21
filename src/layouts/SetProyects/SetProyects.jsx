//Components
import CardProject from '../../components/CardProject/CardProject';

//Style
import './styles.scss';

//Functions
import { removeAccents } from '../../utils/functions/removeAccents';
import { getProjects } from '../../utils/functions/dataProjects';

//Hooks
import { useParams } from 'react-router-dom';

export default function SetProyects(){
    const { projectLevel } = useParams();

    return(
        <>
            {getProjects().filter(element => removeAccents(element.nivel.toLowerCase()) === projectLevel).map(element => <CardProject key={element.id} urlProyect={`/portafolio/${removeAccents(element.nivel.toLowerCase())}/${removeAccents(element.name.toLowerCase())}`} nameProject={element.name} desProject={element.description} img={element.img} />)}
        </>
    )
}
