import './styles.scss';
import  PropTypes from 'prop-types';

export default function Project({project}){
    return(
        <div id='content-projects'>
            {project}
        </div>
    )
}

Project.propTypes={
    project: PropTypes.object,
}