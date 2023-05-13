import PropTypes  from 'prop-types'
import './styles.scss'
export default function Name({creatorName, styless}){
    return(
        <div style={styless} className='creator-name'>
            <h5>{creatorName}</h5>
        </div>
    )
}

Name.propTypes = {
    creatorName: PropTypes.string.isRequired,
    styless: PropTypes.object.isRequired,
}