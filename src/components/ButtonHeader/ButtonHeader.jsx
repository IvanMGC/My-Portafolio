
import PropTypes from 'prop-types';

import './styles.scss'

export default function ButtonHeader({newId, click,componentArr,styles}){
    return(
        <button onClick={click} id={newId} className='button-header ' style={styles}>
            {componentArr}
        </button>
    )
}

ButtonHeader.propTypes = {
    componentArr: PropTypes.object.isRequired,
    click: PropTypes.func,
    styles: PropTypes.object,
    newId: PropTypes.string,
}
