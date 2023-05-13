import PropTypes from 'prop-types';
import './styles.scss';

export default function PageName({pageName}){
    return(
        <div className='title-page'>
            <h4>{pageName}</h4>
        </div>
    )
}

PageName.propTypes ={
    pageName: PropTypes.string.isRequired,
}