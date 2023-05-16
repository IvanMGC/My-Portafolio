import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss'

export default function ButtonLink({styles,classBtn,click, route,text}){
    return(
        <button onClick={click} className={classBtn}>
            <Link style={styles} to={route}>{text}</Link>
        </button>
    )
}

ButtonLink.propTypes = {
    route: PropTypes.string,
    text: PropTypes.string,
    click: PropTypes.func,
    classBtn: PropTypes.string,
    styles: PropTypes.object,
}