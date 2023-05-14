import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss'

export default function ButtonMenu({click, route,text}){
    return(
        <button onClick={click} className='button-menu'>
            <Link to={route}>{text}</Link>
        </button>
    )
}

ButtonMenu.propTypes = {
    route: PropTypes.string,
    text: PropTypes.string,
    click: PropTypes.func,
}