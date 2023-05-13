
import PropTypes from 'prop-types';

import './styles.scss'

export default function ButtonHeader({componentArr}){
    return(
        <button className='button-header'>
            {componentArr}
        </button>
    )
}

ButtonHeader.propTypes = {
    componentArr: PropTypes.object.isRequired,
}
