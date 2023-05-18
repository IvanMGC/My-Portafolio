import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';


export default function CardProject({click, urlProyect, img,nameProject, desProject}){
    return(
        <Link onClick={click} className='card-projects' to={urlProyect}>
            <article className='contenet-card'>
                <img src={img} alt={desProject} />
                <div className='box-descripcion'>
                    <h1 className='name-project'>{nameProject}</h1>
                    <p className='des-project'>{desProject}</p>
                </div>
            </article>
        </Link>
    )
}

CardProject.propTypes = {
    img: PropTypes.string,
    nameProject: PropTypes.string, 
    desProject: PropTypes.string,
    urlProyect: PropTypes.string,
    click: PropTypes.func,
}