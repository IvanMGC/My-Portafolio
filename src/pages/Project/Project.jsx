import { useParams } from 'react-router-dom';
import './styles.scss';
import { getProjects } from '../../utils/functions/dataProjects';
import { removeAccents } from '../../utils/functions/removeAccents';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';



export default function Project(){

    const { projectName } = useParams();
    const project = getProjects().find(pro => (removeAccents(pro.name.toLowerCase()) === projectName) )
    return(
        <div id='content-projects'>
            <section>
                <div className='title-project'>
                    <Title title={project.name.toUpperCase()} />
                </div>
                <div className='project'>
                    {project.project}
                </div>
                <div className='descrip-project'>
                    <Paragraph text={project.description} />
                </div>
            </section>
        </div>
    )
}
