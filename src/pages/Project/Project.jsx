import { useParams } from 'react-router-dom';
import './styles.scss';
import { getProjects } from '../../utils/functions/dataProjects';
import { removeAccents } from '../../utils/functions/removeAccents';



export default function Project(){

    const { projectName } = useParams();
    const project = getProjects().find(pro => (removeAccents(pro.name.toLowerCase()) === projectName) )
    return(
        <div id='content-projects'>
            {project.project}
        </div>
    )
}
