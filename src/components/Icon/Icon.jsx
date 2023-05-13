import PropTypes from "prop-types";

import './styles.scss'
export default function Icon({componentSVG, link}){
    return(
        <div className="icons">
            <a target="_blank" rel="noreferrer" href={link}>
                {componentSVG}
            </a>
        </div>
    )
}

Icon.propTypes = {
    componentSVG: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
}