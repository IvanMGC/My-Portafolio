
import PropTypes from 'prop-types';

import './styles.scss'

export default function ButtonHeader({click,componentArr,styles}){
    return(
        <button onClick={click} className='button-header' style={styles}>
            {componentArr}
        </button>
    )
}

ButtonHeader.propTypes = {
    componentArr: PropTypes.object.isRequired,
    click: PropTypes.func,
    styles: PropTypes.object
}
